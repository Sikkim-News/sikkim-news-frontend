import { getAllArticles } from "./helperFunctions";

export default async function Sitemap() {
	const articles = await getAllArticles();
	const baseUrl = "https://thesikkimnews.com";

	const blogs = articles.map((article) => ({
		url: `${baseUrl}/${article.attributes.slug}`,
		lastModified: article.attributes.createdAt,
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...blogs,
	];
}
