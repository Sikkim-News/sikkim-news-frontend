"use client";
import ReactMarkdown from "react-markdown";
import SocialMediaNewsShare from "@/components/SocialMediaNewsShare";
import styles from "./page.module.css";
import Image from "next/image";
import FlatCardHorizontal from "@/layoutComponents/FlatCardHorizontal";
import { getStrapiURL } from "lib/api";

const getLargestImage = (formats) => {
	// Check for the available image sizes in the formats object
	const sizes = ["large", "medium", "small", "thumbnail", "xsmall"]; // Order of preference
	for (const size of sizes) {
		if (formats[size]) {
			return formats[size].url.startsWith("/")
				? getStrapiURL(formats[size].url)
				: formats[size].url; // Return the URL of the first available size
		}
	}
	return "/resources/mountains.png"; // Fallback image
};

export default function ArticlePage({ article, categoryArticles }) {
	const imageFormats =
		article.attributes.coverImage?.image?.data?.attributes?.formats ?? {};
	const authorName = article.attributes.author?.data?.attributes?.name ?? "Staff";
	const publishedDate = article.attributes.publishedAt
		? new Date(article.attributes.publishedAt).toDateString()
		: "";

	return (
		<>
			<article className={styles.mainArticle}>
				<div>
					<h1>{article.attributes.title}</h1>
					<div className={styles.articleMetadata}>
						<span>{authorName}</span>
						{publishedDate && <span>{publishedDate}</span>}
					</div>
				</div>

				<div>
					<Image
						width={900}
						height={400}
						style={{ width: "100%", height: "auto" }}
						src={getLargestImage(imageFormats)}
						alt="news-image"
					/>
				</div>

				<div className={styles.articleBody}>
					<ReactMarkdown>{article.attributes.content}</ReactMarkdown>
				</div>
				<SocialMediaNewsShare article={article} />
			</article>

			<div className={styles.relatedArticles}>
				<FlatCardHorizontal
					articles={categoryArticles}
					category="Related Stories"
				/>
			</div>
		</>
	);
}
