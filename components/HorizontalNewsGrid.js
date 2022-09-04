import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/HorizontalNewsGrid.module.css";
import ViewMore from "./ViewMore";

function HorizontalNewsGrid({
  overflow,
  articles,
  header,
  categorySlug,
  viewMore,
  home,
}) {
  return (
    <div className={styles.newsGrid}>
      <SectionHeader title={header} />
      <div className={`${styles.cardGrid} ${styles.horizontalScroll}`}>
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
      {viewMore ? (
        <ViewMore className={styles.viewMore} slug={categorySlug} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default HorizontalNewsGrid;
