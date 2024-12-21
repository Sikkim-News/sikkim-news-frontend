"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardVertical.module.css";

export default function NewsCardVertical({
	imageUrl,
	category,
	headline,
	excerpt,
	author,
}) {
	return (
		<div className={styles.newsCardVertical}>
			<div className={styles.imageContainer}>
				<Image
					src={imageUrl}
					alt={headline}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					priority
				/>
				<div className={styles.overlay} />
				<div className={styles.content}>
					<div className={styles.meta}>
						<span className={styles.category}>{category}</span>
						{author && <span className={styles.author}>By {author}</span>}
					</div>
					<h2 className={styles.headline}>{headline}</h2>
					{excerpt && <p className={styles.excerpt}>{excerpt}</p>}
				</div>
			</div>
		</div>
	);
}
