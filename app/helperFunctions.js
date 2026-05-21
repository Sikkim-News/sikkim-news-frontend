import { fetchAPI, getStrapiURL } from "../lib/api.js";

const HOMEPAGE_VIDEO_LIMIT = 4;

const getYouTubeVideoId = (url) => {
	if (!url || typeof url !== "string") {
		return null;
	}

	const trimmedUrl = url.trim();
	if (!trimmedUrl) {
		return null;
	}

	if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
		return trimmedUrl;
	}

	try {
		const parsedUrl = new URL(trimmedUrl);
		const host = parsedUrl.hostname.replace(/^www\./, "").toLowerCase();

		if (host === "youtu.be") {
			const shortId = parsedUrl.pathname.split("/").filter(Boolean)[0];
			return /^[a-zA-Z0-9_-]{11}$/.test(shortId) ? shortId : null;
		}

		if (
			host === "youtube.com" ||
			host === "m.youtube.com" ||
			host === "youtube-nocookie.com"
		) {
			const watchId = parsedUrl.searchParams.get("v");
			if (/^[a-zA-Z0-9_-]{11}$/.test(watchId ?? "")) {
				return watchId;
			}

			const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
			const embedLikeId =
				pathSegments[0] === "embed" ||
				pathSegments[0] === "shorts" ||
				pathSegments[0] === "live"
					? pathSegments[1]
					: null;

			return /^[a-zA-Z0-9_-]{11}$/.test(embedLikeId ?? "") ? embedLikeId : null;
		}
	} catch {
		return null;
	}

	return null;
};

const normalizeHomepageVideo = (video, index) => {
	// Support both Strapi v4 (video.attributes.X) and v5 (video.X)
	const attrs = video?.attributes ?? video;

	// Local schema uses youtubeUrl/youtubeVideoId; production uses Link
	const videoId =
		attrs?.youtubeVideoId?.trim() ||
		getYouTubeVideoId(attrs?.Link ?? "") ||
		getYouTubeVideoId(attrs?.youtubeUrl ?? "");

	if (!videoId) {
		return null;
	}

	const rawUrl = attrs?.youtubeUrl ?? attrs?.Link ?? `https://www.youtube.com/watch?v=${videoId}`;

	return {
		id: video?.id ?? `homepage-video-${index}`,
		title:
			attrs.title?.trim() ||
			attrs.Title?.trim() ||
			attrs.name?.trim() ||
			`Latest Video ${index + 1}`,
		youtubeUrl: rawUrl,
		videoId,
		embedUrl: `https://www.youtube.com/embed/${videoId}`,
		thumbnailUrl: attrs?.thumbnailUrl ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
	};
};

export const getDataforCategory = async (slug) => {
	const category = await fetchAPI("/categories", {
		filters: { slug: slug },
		populate: {
			articles: {
				fields: ["title", "slug", "createdAt", "publishedAt"],
				populate: {
					coverImage: { populate: "*" },
					author: { fields: ["name"] },
					categories: { fields: ["name", "slug"] },
				},
				sort: ["publishedAt:desc"],
			},
		},
	});

	return category.data?.[0] ?? null;
};

const HOME_ARTICLE_POPULATE = {
	fields: ["title", "slug", "createdAt", "publishedAt"],
	populate: {
		coverImage: { populate: "*" },
		author: { fields: ["name"] },
		categories: { fields: ["name", "slug"] },
	},
	sort: ["publishedAt:desc"],
};

export const getHomeData = async () => {
	// Run API calls in parallel
	const [
		bannerArticles,
		trendingArticles,
		nationalArticles,
		sportsArticles,
		localArticles,
		exclusiveArticles,
	] = await Promise.all([
		fetchAPI("/categories", {
			filters: { name: "banner" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
		fetchAPI("/categories", {
			filters: { name: "trending" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
		fetchAPI("/categories", {
			filters: { name: "national" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
		fetchAPI("/categories", {
			filters: { name: "sports" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
		fetchAPI("/categories", {
			filters: { name: "local" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
		fetchAPI("/categories", {
			filters: { name: "exclusives" },
			populate: { articles: HOME_ARTICLE_POPULATE },
		}),
	]);

	// Support both Strapi v4 (.attributes.articles.data) and v5 (.articles)
	const getArticles = (res) =>
		res.data?.[0]?.attributes?.articles?.data ?? res.data?.[0]?.articles ?? [];

	return {
		bannerArticles: getArticles(bannerArticles),
		trendingArticles: getArticles(trendingArticles),
		nationalArticles: getArticles(nationalArticles),
		sportsArticles: getArticles(sportsArticles),
		localArticles: getArticles(localArticles),
		exclusiveArticles: getArticles(exclusiveArticles),
	};
};

export const getHomepageVideos = async () => {
	try {
		const response = await fetchAPI("/ytvideos", {
			sort: ["publishedAt:desc", "createdAt:desc"],
			pagination: {
				page: 1,
				pageSize: HOMEPAGE_VIDEO_LIMIT,
			},
		});

		return (response?.data ?? [])
			.map((video, index) => normalizeHomepageVideo(video, index))
			.filter(Boolean);
	} catch (error) {
		console.error("Failed to fetch homepage videos:", error);
		return [];
	}
};

export const getAllArticles = async (num) => {
	let articles = [];
	let response = {};
	if (num) {
		response = await fetchAPI("/articles", {
			fields: ["slug", "title", "createdAt"],
			pagination: {
				page: 1,
				pageSize: num,
			},
			populate: {
				coverImage: { populate: "*" },
				author: { fields: ["name"] },
				categories: { fields: ["name", "slug"] },
			},
			sort: ["publishedAt:desc"],
		});
		articles = response.data;
	} else {
		let page = 1;
		do {
			response = await fetchAPI("/articles", {
				fields: ["slug", "title", "createdAt"],
				pagination: {
					page,
					pageSize: 50,
				},
			});
			articles = articles.concat(response.data);
			page += 1;
		} while (articles.length < response.meta.pagination.total);
	}
	return articles;
};

export const extractDatafromArticles = (articles) => {
	return (articles ?? []).map((article) => {
		// Support both Strapi v4 (article.attributes.X) and v5 (article.X)
		const attrs = article?.attributes ?? article;

		const formats =
			attrs?.coverImage?.image?.data?.attributes?.formats ??
			attrs?.coverImage?.image?.formats ?? {};
		const imagePath =
			formats.large?.url ??
			formats.medium?.url ??
			formats.small?.url ??
			formats.thumbnail?.url ??
			null;

		return {
			imageUrl: imagePath
				? imagePath.startsWith("/")
					? getStrapiURL(imagePath)
					: imagePath
				: "/resources/mountains.png",
			headline: attrs?.title ?? "",
			content: attrs?.content ?? "",
			author: attrs?.author?.data?.attributes?.name ?? attrs?.author?.name ?? "",
			date: attrs?.createdAt ?? "",
			slug: attrs?.slug ?? "",
			category:
				attrs?.categories?.data?.[0]?.attributes?.name ??
				attrs?.categories?.[0]?.name ?? "",
		};
	});
};

// (async () => {
// 	try {
// 		const articles = await getAllArticles();
// 		console.log("Fetched Articles:", articles);
// 	} catch (error) {
// 		console.error("Error fetching articles:", error);
// 	}
// })();
