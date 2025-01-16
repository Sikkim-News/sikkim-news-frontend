import { fetchAPI } from "../lib/api.js";

export const getDataforCategory = async (slug) => {
	const category = await Promise.all([
		fetchAPI("/categories", {
			filters: { slug: slug },
			populate: {
				articles: {
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "name" },
						categories: { populate: "name" },
					},
					sort: ["publishedAt:desc"],
				},
			},
		}),
	]);

	return category[0].data[0] ? category[0].data[0] : null;
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
			// pagination: { start: 0, limit: 5 },
			populate: {
				articles: {
					// pagination: { page: 1, pageSize: 5 },
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
					sort: ["publishedAt:desc"],
				},
			},
		}),
		fetchAPI("/categories", {
			filters: { name: "trending" },
			populate: {
				articles: {
					sort: ["publishedAt:desc"],
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
				},
			},
		}),
		fetchAPI("/categories", {
			filters: { name: "national" },
			populate: {
				articles: {
					sort: ["publishedAt:desc"],
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
				},
			},
		}),
		fetchAPI("/categories", {
			filters: { name: "sports" },
			populate: {
				articles: {
					sort: ["publishedAt:desc"],
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
				},
			},
		}),
		fetchAPI("/categories", {
			filters: { name: "local" },
			populate: {
				articles: {
					sort: ["publishedAt:desc"],
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
				},
			},
		}),
		fetchAPI("/categories", {
			filters: { name: "exclusives" },
			populate: {
				articles: {
					sort: ["publishedAt:desc"],
					populate: {
						coverImage: { populate: "*" },
						author: { populate: "*" },
						categories: { populate: "*" },
					},
				},
			},
		}),
	]);

	// console.log(
	// 	bannerArticles.data[0].attributes.articles.data[0].attributes.categories
	// 		.data[0].attributes.name
	// );
	// console.log(bannerArticles.data[0].attributes.articles.data.length);

	return {
		bannerArticles: bannerArticles.data[0].attributes.articles.data,
		trendingArticles: trendingArticles.data[0].attributes.articles.data,
		nationalArticles: nationalArticles.data[0].attributes.articles.data,
		sportsArticles: sportsArticles.data[0].attributes.articles.data,
		localArticles: localArticles.data[0].attributes.articles.data,
		exclusiveArticles: exclusiveArticles.data[0].attributes.articles.data,
	};
};

export const getAllArticles = async (num) => {
	let articles = [];
	let response = {};
	console.log("In get all articles");
	console.log(num);
	if (num) {
		response = await fetchAPI("/articles", {
			fields: ["slug", "title", "createdAt"],
			pagination: {
				page: 1,
				pageSize: num,
			},
			populate: {
				coverImage: { populate: "*" },
				author: { populate: "*" },
				categories: { populate: "*" },
			},
			sort: ["publishedAt:desc"],
		});
		articles = response.data;
	} else {
		do {
			response = await fetchAPI("/articles", {
				fields: ["slug", "title", "createdAt"],
				pagination: {
					page: 1,
					pageSize: 50,
				},
			});
			articles = articles.concat(response.data);
		} while (articles.length < response.meta.pagination.total);
	}
	return articles;
};

export const extractDatafromArticles = (articles) => {
	// console.log(articles);
	return articles.map((article, index) => ({
		imageUrl:
			article.attributes.coverImage.image.data.attributes.formats.small?.url,
		headline: article.attributes.title,
		content: article.attributes.content,
		author: article.attributes.author.data.attributes.name,
		date: article.attributes.createdAt,
		slug: article.attributes.slug,
		category: article.attributes.categories.data[0].attributes.name,
	}));
};

// (async () => {
// 	try {
// 		const articles = await getAllArticles();
// 		console.log("Fetched Articles:", articles);
// 	} catch (error) {
// 		console.error("Error fetching articles:", error);
// 	}
// })();
