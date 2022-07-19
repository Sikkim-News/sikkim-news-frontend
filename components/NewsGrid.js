import React from "react";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";
import styles from "@/styles/NewsGrid.module.css";
import ViewMore from "./ViewMore";

function NewsGrid({ overflow, articles, header, categorySlug, viewMore }) {
  return (
    <div>
      <SectionHeader title={header} />
      <div className={`${styles.cardGrid} ${overflow ? styles.overflow : ""}`}>
        {articles.slice(0, 4).map((item, i) => (
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

export default NewsGrid;
