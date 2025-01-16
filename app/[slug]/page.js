import { fetchAPI } from "lib/api";
import ArticlePage from "./article";
import {
	extractDatafromArticles,
	getDataforCategory,
} from "app/helperFunctions";
import { cache } from "react";

export async function generateMetadata({ params }) {
	const article = await getData({ params });

	return {
		title: article.article.attributes.title,
		description: article.article.attributes.description,
		openGraph: {
			title: article.article.attributes.title,
			description: article.article.attributes.description,
			images: [
				{
					url: article.article.attributes.coverImage.image.data.attributes
						.formats.small.url,
					width: 800,
					height: 600,
					alt: article.article.attributes.title,
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
			article.article.attributes.description,
		],
	};
}

const getData = cache(async ({ params }) => {
	const article = await Promise.all([
		fetchAPI("/articles", {
			filters: { slug: params.slug },
			populate: {
				coverImage: { populate: "*" },
				categories: "name",
				author: "name",
			},
		}),
	]);

	const categoryArticles = await getDataforCategory(
		article[0].data[0].attributes.categories.data[0].attributes.slug
	);

	return {
		article: article[0].data[0],
		categoryArticles: extractDatafromArticles(
			categoryArticles.attributes.articles.data
		),
	};
});

export default async function NewsPage({ params }) {
	const { article, categoryArticles } = await getData({ params });
	console.log(article);
	console.log(categoryArticles);
	return (
		<>
			<ArticlePage article={article} categoryArticles={categoryArticles} />
		</>
	);
}
