import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/HorizontalNewsGrid.module.css";
import ViewMore from "./ViewMore";

function HorizontalNewsGrid({ articles, header, categorySlug }) {
  return (
    <div className={styles.newsGrid}>
      <div className={styles.newsGrid__header}>
        <SectionHeader title={header} />
        <ViewMore className={styles.viewMoreHeader} slug={categorySlug} />
      </div>
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
      <ViewMore className={styles.viewMore} slug={categorySlug} />
    </div>
  );
}

export default HorizontalNewsGrid;
