import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SmallCard.module.css";

export default function SmallCard({
	imageUrl,
	headline,
	excerpt,
	category,
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
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
						className={styles.image}
					/>
				</div>
				<div className={styles.content}>
					{/* <div className={styles.category}>{category}</div> */}
					<h2 className={styles.headline}>{headline}</h2>
					<div className={styles.meta}>
						{author && <span className={styles.author}>{author}</span>}
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
