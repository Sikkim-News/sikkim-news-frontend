"use client";

import Image from "next/image";
import styles from "@/styles/NewsCardVertical.module.css";
import Link from "next/link";

export default function NewsCardVertical({
	imageUrl,
	category,
	headline,
	content,
	author,
	slug,
}) {
	return (
		<Link href={`/${slug}`} passHref>
			<div className={styles.newsCardVertical}>
				<div className={styles.imageContainer}>
					<Image
						src={imageUrl}
						alt={headline}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
					<div className={styles.overlay} />
					<div className={styles.content}>
						<div className={styles.meta}>
							{/* {category && <span className={styles.category}>{category}</span>} */}
							{author && <span className={styles.author}>By {author}</span>}
						</div>
						<h2 className={styles.headline}>{headline}</h2>
						{content && <p className={styles.excerpt}>{content}</p>}
					</div>
				</div>
			</div>
		</Link>
	);
}
