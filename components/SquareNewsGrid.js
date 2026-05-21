import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/SquareNewsGrid.module.css";

function SquareNewsGrid({
	isPageGrid,
	articles,
	header,
	categorySlug,
	viewMore,
}) {
	return (
		<div className={styles.newsGrid}>
			<SectionHeader
				title={header}
				viewMore={viewMore}
				categorySlug={categorySlug}
			/>
			<div
				className={`${styles.cardGrid} ${
					isPageGrid ? styles.pageSquareGrid : styles.squareGrid
				}`}
			>
				{articles.map((item, i) => {
					const attrs = item?.attributes ?? item;
					const formats =
						attrs?.coverImage?.image?.data?.attributes?.formats ??
						attrs?.coverImage?.image?.formats ??
						{};
					const imageUrl =
						formats.small?.url ?? formats.thumbnail?.url ?? null;
					return (
						<NewsCard
							key={i}
							imageUrl={imageUrl}
							headline={attrs?.title}
							content={attrs?.content}
							slug={attrs?.slug}
							createdAt={attrs?.createdAt}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default SquareNewsGrid;
