import styles from "@/styles/HomePage.module.css";
import Layout from "@/components/Layout";
import { fetchAPI } from "../lib/api";
import { Grid } from "@mui/material";
import Carrousel from "@/components/Carrousel";
import NewsGrid from "@/components/NewsGrid";

export default function Home({
  bannerArticles,
  trendingArticles,
  nationalArticles,
  sportsArticles,
}) {
  return (
    <div className={styles.HomePage}>
      <Layout>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Carrousel articles={bannerArticles} />
          </Grid>
          <Grid item xs={12} md={6}>
            <NewsGrid
              articles={trendingArticles}
              header="Trending in Sikkim"
              categorySlug="trending"
            />
            <NewsGrid
              articles={nationalArticles}
              header="National News"
              categorySlug="national"
            />
            <NewsGrid
              articles={sportsArticles}
              header="Sports and Entertainment"
              categorySlug="sports"
            />
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [bannerArticles, trendingArticles, nationalArticles, sportsArticles] =
    await Promise.all([
      fetchAPI("/categories", {
        filters: { name: "banner" },
        populate: {
          articles: { populate: { coverImage: { populate: "*" } } },
          sort: "createdAt",
        },
      }),
      fetchAPI("/categories", {
        filters: { name: "trending" },
        populate: { articles: { populate: { coverImage: { populate: "*" } } } },
      }),
      fetchAPI("/categories", {
        filters: { name: "national" },
        populate: { articles: { populate: { coverImage: { populate: "*" } } } },
      }),
      fetchAPI("/categories", {
        filters: { name: "sports" },
        populate: { articles: { populate: { coverImage: { populate: "*" } } } },
      }),
    ]);

  return {
    props: {
      bannerArticles: bannerArticles.data[0].attributes.articles.data,
      trendingArticles: trendingArticles.data[0].attributes.articles.data,
      nationalArticles: nationalArticles.data[0].attributes.articles.data,
      sportsArticles: sportsArticles.data[0].attributes.articles.data,
    },
  };
}
