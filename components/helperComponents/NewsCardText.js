"use client";

import styles from "@/styles/NewsCardText.module.css";
import Link from "next/link";

export default function NewsCardText({
	headline,
	content,
	publishedAt,
	slug,
	author,
}) {
	return (
		<Link href={`/${slug}`} passHref>
			<div className={styles.newsCardOnlyText}>
				<div className={styles.newsCardHeader}>
					<h2 className={styles.headlineOnly}>{headline}</h2>
					{author && <p className={styles.author}>By: {author}</p>}
				</div>
				{/* {content && (
					<div className={styles.newsCardContent}>
						<p className={styles.content}>{content}</p>
					</div>
				)}
				{content && <div className={styles.newsCardFooter}>Read More</div>} */}
			</div>
		</Link>
	);
}
