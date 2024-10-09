import { fetchAPI } from "../lib/api";
import FullPage from "./FullPage";


const getData = async () => {
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
    }),
    fetchAPI("/categories", {
      filters: { name: "trending" },
      populate: {
        articles: {sort: ["publishedAt:desc"], populate: { coverImage: { populate: "*" } }}
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "national" },
      populate: {
        articles: {sort: ["publishedAt:desc"], populate: { coverImage: { populate: "*" } } },
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "sports" },
      populate: {
        articles: {sort: ["publishedAt:desc"], populate: { coverImage: { populate: "*" } } },
        
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "local" },
      populate: {
        articles: { sort: ["publishedAt:desc"], populate: { coverImage: { populate: "*" } } },
      },
    }),
    fetchAPI("/categories", {
      filters: { name: "exclusives" },
      populate: {
        articles: { sort: ["publishedAt:desc"], populate: { coverImage: { populate: "*" } } },
      },
    }),
  ]);

  return {
      bannerArticles: bannerArticles.data[0].attributes.articles.data,
      trendingArticles: trendingArticles.data[0].attributes.articles.data,
      nationalArticles: nationalArticles.data[0].attributes.articles.data,
      sportsArticles: sportsArticles.data[0].attributes.articles.data,
      localArticles: localArticles.data[0].attributes.articles.data,
      exclusiveArticles: exclusiveArticles.data[0].attributes.articles.data,
  };
}


export default async function Home() {

    const {bannerArticles, trendingArticles, nationalArticles, sportsArticles, localArticles, exclusiveArticles} = await getData();

  return (
    <FullPage bannerArticles={bannerArticles} trendingArticles={trendingArticles} nationalArticles={nationalArticles} sportsArticles={sportsArticles} localArticles={localArticles} exclusiveArticles={exclusiveArticles}/>
  );
}