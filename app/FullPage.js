"use client";
import SquareNewsGrid from "@/components/SquareNewsGrid";
import HorizontalNewsGrid from "@/components/HorizontalNewsGrid";
import styles from "@/styles/HomePage.module.css";
import Layout from "@/components/Layout";

export default function FullPage({bannerArticles, trendingArticles, nationalArticles, sportsArticles, localArticles, exclusiveArticles}){
    return(
        <div className={styles.HomePage}>
      <Layout style={styles.LayoutStyle}>
        <div className={styles.HomePage__arrangement}>
          <div className={styles.HomePage__carousel}>
            {/* <NewCarousel articles={bannerArticles.slice(0, 6)} /> */}
            <div className={styles.HomePage__newsArticles}>
            <SquareNewsGrid
              home
              articles={bannerArticles.slice(0, 4)}
              header="Trending in Sikkim"
              categorySlug="trending"
            />
          </div>
          </div>
          <div className={styles.HomePage__newsArticles}>
            <SquareNewsGrid
              home
              articles={trendingArticles.slice(0, 4)}
              header="Trending in Sikkim"
              categorySlug="trending"
            />
          </div>
        </div>

        <HorizontalNewsGrid
          articles={localArticles.slice(0, 4)}
          header="Local Headlines"
          categorySlug="local"
          overflow
        />

        <HorizontalNewsGrid
          articles={nationalArticles.slice(0, 4)}
          header="National News"
          categorySlug="national"
          overflow
        />

        <HorizontalNewsGrid
          articles={sportsArticles.slice(0, 4)}
          header="Sports and Entertainment"
          categorySlug="sports"
          overflow
        />

        <HorizontalNewsGrid
          articles={exclusiveArticles.slice(0, 4)}
          header="SN Exclusives"
          categorySlug="exclusives"
          overflow
        />
      </Layout>
    </div>
    )
}