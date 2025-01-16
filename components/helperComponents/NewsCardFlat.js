"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardFlat.module.css";
import Link from "next/link";

export default function NewsCardFlat({
	imageUrl,
	category,
	headline,
	content,
	date,
	author,
	slug,
}) {
	return (
		<Link href={`/${slug}`} passHref>
			<div className={styles.newsCard}>
				<div className={styles.imageContainer}>
					<Image
						src={imageUrl}
						alt={headline}
						fill
						sizes="(max-width: 768px) 100vw, 30vw"
					/>
				</div>
				<div className={styles.content}>
					<div>
						{/* <div className={styles.category}>{category}</div> */}
						<h2 className={styles.headline}>{headline}</h2>
						{/* {content && <p className={styles.excerpt}>{content}</p>} */}
					</div>
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
