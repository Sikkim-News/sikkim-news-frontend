"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardVerticalAlt.module.css";
import Link from "next/link";

export default function NewsCardVerticalAlt({
	imageUrl,
	headline,
	excerpt,
	author,
	date,
	slug,
}) {
	return (
		<Link href={`/${slug}`}>
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
