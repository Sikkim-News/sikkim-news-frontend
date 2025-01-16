"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardVerticalCompact.module.css";
import Link from "next/link";

export default function NewsCardVerticalCompact({
	imageUrl,
	category,
	headline,
	excerpt,
	author,
	date,
	slug,
}) {
	return (
		<Link href={`/${slug}`} passHref>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<Image
						src={imageUrl}
						alt={headline}
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.category}>{category}</div>
					<h2 className={styles.headline}>{headline}</h2>
					{excerpt && <p className={styles.excerpt}>{excerpt}</p>}
					<div className={styles.meta}>
						{author && <span className={styles.author}>By {author}</span>}
						{date && (
							<span className={styles.date}>
								{new Date(date).toDateString()}
							</span>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}
