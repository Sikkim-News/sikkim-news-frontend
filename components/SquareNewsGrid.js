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
      <SectionHeader title={header} viewMore={viewMore} categorySlug={categorySlug}/>
      <div
        className={`${styles.cardGrid} ${
          isPageGrid ? styles.pageSquareGrid : styles.squareGrid
        }`}
      >
        {articles.map((item, i) => (
          <NewsCard
            key={i}
            imageUrl={
              item.attributes.coverImage.image.data.attributes.formats.small
                ?.url
            }
            headline={item.attributes.title}
            content={item.attributes.content}
            slug={item.attributes.slug}
            createdAt={item.attributes.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default SquareNewsGrid;
