export default function robots() {
	const baseUrl = "https://thesikkimnews.com";
	return {
		rules: {
			userAgent: "*",
			allow: ["/", "/category", "/contact"],
			disallow: [],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
