"use client";
import ReactMarkdown from "react-markdown";
import SocialMediaNewsShare from "@/components/SocialMediaNewsShare";
import styles from "./page.module.css";
import HorizontalNewsGrid from "@/components/HorizontalNewsGrid";
import Image from "next/image";
import FlatCardHorizontal from "@/layoutComponents/FlatCardHorizontal";

const getLargestImage = (formats) => {
	// Check for the available image sizes in the formats object
	const sizes = ["large", "medium", "small", "thumbnail", "xsmall"]; // Order of preference
	for (const size of sizes) {
		if (formats[size]) {
			return formats[size].url; // Return the URL of the first available size
		}
	}
	return formats.small.url; // Fallback to small if none are available
};

export default function ArticlePage({ article, categoryArticles }) {
	console.log(article);
	return (
		<>
			<article className={styles.mainArticle}>
				<div>
					<h1>{article.attributes.title}</h1>
					<div className={styles.articleMetadata}>
						<span>{article.attributes.author.data.attributes.name}</span>
						<span>
							{new Date(article.attributes.publishedAt).toDateString()}
						</span>
					</div>
				</div>

				<div>
					<Image
						width={900}
						height={400}
						layout="responsive"
						src={getLargestImage(
							article.attributes.coverImage.image.data.attributes.formats
						)}
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
