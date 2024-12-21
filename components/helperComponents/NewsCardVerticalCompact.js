"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardVerticalCompact.module.css";

export default function NewsCardVerticalCompact({
	imageUrl,
	category,
	headline,
	excerpt,
	author,
	date,
}) {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={imageUrl}
					alt={headline}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					priority
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.category}>{category}</div>
				<h2 className={styles.headline}>{headline}</h2>
				{excerpt && <p className={styles.excerpt}>{excerpt}</p>}
				<div className={styles.meta}>
					{author && <span className={styles.author}>By {author}</span>}
					{date && <span className={styles.date}>{date}</span>}
				</div>
			</div>
		</div>
	);
}
