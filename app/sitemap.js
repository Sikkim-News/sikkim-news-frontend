import { getAllArticles } from "./helperFunctions";

export default async function Sitemap() {
	const articles = await getAllArticles();
	const baseUrl = "https://thesikkimnews.com";

	// Support both Strapi v4 (article.attributes.X) and v5 (article.X)
	const blogs = articles.map((article) => {
		const attrs = article?.attributes ?? article;
		return {
			url: `${baseUrl}/${attrs.slug}`,
			lastModified: attrs.createdAt,
		};
	});

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...blogs,
	];
}
