import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/HorizontalNewsGrid.module.css";
import ViewMore from "./ViewMore";

function HorizontalNewsGrid() {
	const articles = [
		{
			id: 1,
			title: "Article 1",
			content: "This is the content of Article 1",
			slug: "article-1",
			createdAt: "2022-01-01T00:00:00.000Z",
		},
		{
			id: 2,
			title: "Article 2",
			content: "This is the content of Article 2",
			slug: "article-2",
			createdAt: "2022-01-01T00:00:00.000Z",
		},
		{
			id: 3,
			title: "Article 3",
			content: "This is the content of Article 3",
			slug: "article-3",
			createdAt: "2022-01-01T00:00:00.000Z",
		},
		{
			id: 4,
			title: "Article 4",
			content: "This is the content of Article 4",
			slug: "article-4",
			createdAt: "2022-01-01T00:00:00.000Z",
		},
		{
			id: 5,
			title: "Article 5",
			content: "This is the content of Article 5",
			slug: "article-5",
			createdAt: "2022-01-01T00:00:00.000Z",
		},
	];

	return (
		<div className={styles.newsGrid}>
			<div className={styles.newsGrid__header}>
				<SectionHeader title="Header" />
				<ViewMore className={styles.viewMoreHeader} slug="politics" />
			</div>
			<div className={`${styles.cardGrid} ${styles.horizontalScroll}`}>
				{articles.map((item, i) => (
					<NewsCard
						key={i}
						imageUrl="https://picsum.photos/200/300"
						headline={item.title}
						content={item.content}
						slug={item.slug}
						createdAt={item.createdAt}
					/>
				))}
			</div>
			<ViewMore className={styles.viewMore} slug="politics" />
		</div>
	);
}

export default HorizontalNewsGrid;
