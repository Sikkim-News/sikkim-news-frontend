import { fetchAPI, getStrapiURL } from "lib/api";
import ArticlePage from "./article";
import {
	extractDatafromArticles,
	getDataforCategory,
} from "app/helperFunctions";
import { cache } from "react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
	const article = await getData({ params });
	if (!article) {
		return {
			title: "Article Not Found",
			description: "The requested article could not be found.",
		};
	}

	// Support both Strapi v4 (article.attributes.X) and v5 (article.X)
	const attrs = article.article?.attributes ?? article.article;
	const ogImagePath =
		attrs.coverImage?.image?.data?.attributes?.formats?.small?.url ??
		attrs.coverImage?.image?.formats?.small?.url ??
		"/resources/mountains.png";
	const ogImageUrl = ogImagePath.startsWith("/")
		? getStrapiURL(ogImagePath)
		: ogImagePath;

	return {
		title: attrs.title ?? "Sikkim News",
		description:
			attrs.description ??
			"Explore the latest and trending news from Sikkim and Nearby Areas.",
		openGraph: {
			title: attrs.title ?? "Sikkim News",
			description:
				attrs.description ??
				"Explore the latest and trending news from Sikkim and Nearby Areas.",
			images: [
				{
					url: ogImageUrl,
					width: 800,
					height: 600,
					alt: attrs.title ?? "Sikkim News",
				},
			],
		},
		keywords: [
			"Sikkim",
			"Sikkim News",
			"Breaking News",
			"North East",
			"Darjeeling News",
			"Top News in Sikkim",
			attrs.description ?? "Sikkim News",
		],
	};
}

const getData = cache(async ({ params }) => {
	const articleResponse = await fetchAPI("/articles", {
		filters: { slug: params.slug },
		populate: {
			coverImage: { populate: "*" },
			categories: { fields: ["name", "slug"] },
			author: { fields: ["name"] },
		},
	});
	const article = articleResponse?.data?.[0];
	if (!article) return null;

	// Support both Strapi v4 and v5 for category slug lookup
	const categorySlug =
		article.attributes?.categories?.data?.[0]?.attributes?.slug ??
		article.categories?.[0]?.slug ?? null;
	const categoryArticles = categorySlug
		? await getDataforCategory(categorySlug)
		: null;

	return {
		article,
		categoryArticles: extractDatafromArticles(
			categoryArticles?.attributes?.articles?.data ??
			categoryArticles?.articles ?? []
		),
	};
});

export default async function NewsPage({ params }) {
	const data = await getData({ params });
	if (!data) notFound();
	const { article, categoryArticles } = data;
	return (
		<>
			<ArticlePage article={article} categoryArticles={categoryArticles} />
		</>
	);
}
