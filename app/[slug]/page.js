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

	const ogImagePath =
		article.article.attributes.coverImage?.image?.data?.attributes?.formats?.small
			?.url ?? "/resources/mountains.png";
	const ogImageUrl = ogImagePath.startsWith("/")
		? getStrapiURL(ogImagePath)
		: ogImagePath;

	return {
		title: article.article.attributes.title ?? "Sikkim News",
		description:
			article.article.attributes.description ??
			"Explore the latest and trending news from Sikkim and Nearby Areas.",
		openGraph: {
			title: article.article.attributes.title ?? "Sikkim News",
			description:
				article.article.attributes.description ??
				"Explore the latest and trending news from Sikkim and Nearby Areas.",
			images: [
				{
					url: ogImageUrl,
					width: 800,
					height: 600,
					alt: article.article.attributes.title ?? "Sikkim News",
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
			article.article.attributes.description ?? "Sikkim News",
		],
	};
}

const getData = cache(async ({ params }) => {
	const articleResponse = await fetchAPI("/articles", {
		filters: { slug: params.slug },
		populate: {
			coverImage: { populate: "*" },
			categories: "name",
			author: "name",
		},
	});
	const article = articleResponse?.data?.[0];
	if (!article) return null;

	const categorySlug =
		article.attributes?.categories?.data?.[0]?.attributes?.slug ?? null;
	const categoryArticles = categorySlug
		? await getDataforCategory(categorySlug)
		: null;

	return {
		article,
		categoryArticles: extractDatafromArticles(
			categoryArticles?.attributes?.articles?.data ?? []
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
