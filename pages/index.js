import styles from "@/styles/HomePage.module.css";
import Layout from "@/components/Layout";
import { fetchAPI } from "../lib/api";
import Carrousel from "@/components/Carrousel";
import SquareNewsGrid from "@/components/SquareNewsGrid";
import HorizontalNewsGrid from "@/components/HorizontalNewsGrid";

export default function Home({
  bannerArticles,
  trendingArticles,
  nationalArticles,
  sportsArticles,
  localArticles,
  exclusiveArticles,
}) {
  return (
    <div className={styles.HomePage}>
      <Layout style={styles.LayoutStyle}>
        <div className={styles.HomePage__arrangement}>
          <div className={styles.HomePage__carousel}>
            <Carrousel articles={bannerArticles.slice(0, 6)} />
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
          articles={localArticles.slice(0, 6)}
          header="Local Headlines"
          categorySlug="local"
          overflow
        />

        <HorizontalNewsGrid
          articles={nationalArticles.slice(0, 6)}
          header="National News"
          categorySlug="national"
          overflow
        />

        <HorizontalNewsGrid
          articles={sportsArticles.slice(0, 6)}
          header="Sports and Entertainment"
          categorySlug="sports"
          overflow
        />

        <HorizontalNewsGrid
          articles={exclusiveArticles.slice(0, 6)}
          header="SN Exclusives"
          categorySlug="exclusives"
          overflow
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // Run API calls in parallel
  const [
    bannerArticles,
    trendingArticles,
    nationalArticles,
    sportsArticles,
    localArticles,
    exclusiveArticles,
  ] = await Promise.all([
    fetchAPI("/categories", {
      filters: { name: "banner" },
      populate: {
        articles: {
          populate: { coverImage: { populate: "*" } },
          sort: ["publishedAt:desc"],
        },
      },
      pagination: {
        page: 1,
        pageSize: 4,
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "trending" },
      populate: {
        articles: { populate: { coverImage: { populate: "*" } } },
        sort: ["publishedAt:desc"],
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "national" },
      populate: {
        articles: { populate: { coverImage: { populate: "*" } } },
        sort: ["publishedAt:desc"],
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "sports" },
      populate: {
        articles: { populate: { coverImage: { populate: "*" } } },
        sort: ["publishedAt:desc"],
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "local" },
      populate: {
        articles: { populate: { coverImage: { populate: "*" } } },
        sort: ["publishedAt:desc"],
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "exclusives" },
      populate: {
        articles: { populate: { coverImage: { populate: "*" } } },
        sort: ["publishedAt:desc"],
      },
    }),
  ]);

  return {
    props: {
      bannerArticles: bannerArticles.data[0].attributes.articles.data,
      trendingArticles: trendingArticles.data[0].attributes.articles.data,
      nationalArticles: nationalArticles.data[0].attributes.articles.data,
      sportsArticles: sportsArticles.data[0].attributes.articles.data,
      localArticles: localArticles.data[0].attributes.articles.data,
      exclusiveArticles: exclusiveArticles.data[0].attributes.articles.data,
    },
  };
}
