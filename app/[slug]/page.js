"use client";
import Image from "next/image";
import { fetchAPI } from "lib/api";
import ReactMarkdown from "react-markdown";
import SocialMediaNewsShare from "@/helperComponents/SocialMedia";
import HorizontalNewsGrid from "@/components/HorizontalNewsGrid";

// todo set seo
{
	/* <Head>
        <title>{seo.title}</title>
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />

        <meta name="description" content={seo.description} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />

        <meta property="og:image" content={seo.image} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="image" content={seo.image} />

        {article && <meta property="og:type" content="article" />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */
}

const getData = async ({ params }) => {
	console.log(params);
	const article = await Promise.all([
		fetchAPI("/articles", {
			filters: { slug: params.slug },
			populate: { coverImage: { populate: "*" }, categories: "*", author: "*" },
		}),
	]);

	// console.log(article[0].data[0].attributes.categories.data[0].attributes.slug);

	const categoryArticles = await Promise.all([
		fetchAPI("/categories", {
			filters: {
				slug: article[0].data[0].attributes.categories.data[0].attributes.slug,
			},
			populate: {
				articles: {
					populate: { coverImage: { populate: "*" } },
					sort: ["publishedAt:desc"],
				},
			},
		}),
	]);

	// console.log(categoryArticles[0].data[0].attributes.articles.data);

	return {
		article: article[0].data[0],
		categoryArticles: categoryArticles[0].data[0].attributes.articles.data,
	};
};

export default async function NewsPage({ params }) {
	// const seo = {
	//   title: article.attributes.title,
	//   description: article.attributes.description,
	//   image:
	//     article.attributes.coverImage.image.data.attributes.formats.small.url,
	// };

	const { article, categoryArticles } = await getData({ params });
	console.log(article);
	console.log(categoryArticles);
	return (
		<>
			<article style={{ maxWidth: "900px" }}>
				<h1>{article.attributes.title.toUpperCase()}</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						fontSize: "1rem",
						margin: "1rem 0",
					}}
				>
					<span>{article.attributes.author.data.attributes.name}</span>
					<span>{new Date(article.attributes.publishedAt).toDateString()}</span>
				</div>

				<div style={{ width: "900px", height: "400px", position: "relative" }}>
					<Image
						// style={{ width: "100%", height: "100%", objectFit: "cover" }}
						width={900}
						height={400}
						layout="responsive"
						src={
							article.attributes.coverImage.image.data.attributes.formats.small
								.url
						}
						alt="news-image"
					/>
				</div>

				<div
					style={{
						whiteSpace: "pre-line",
						fontSize: "1rem",
						textAlign: "justify",
						fontFamily: "Roboto",
						textJustify: "inter-word",
						width: "inherit",
					}}
				>
					<ReactMarkdown>{article.attributes.content}</ReactMarkdown>
				</div>
			</article>
			<SocialMediaNewsShare article={article} />
			<HorizontalNewsGrid
				articles={categoryArticles.slice(0, 6)}
				header={`Explore More Stories`}
				categorySlug={article.attributes.categories.data[0].attributes.slug}
			/>
		</>
	);
}
