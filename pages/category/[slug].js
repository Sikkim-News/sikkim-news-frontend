import Layout from "@/components/Layout";
import NewsGrid from "@/components/SquareNewsGrid";
import { fetchAPI } from "lib/api";
import { useRouter } from "next/router";
import styles from "@/styles/CategoriesPage.module.css";
import HomeStyles from "@/styles/HomePage.module.css";
import Head from "next/head";

function CategoryPage({ categoryDetails }) {
  const router = useRouter();

  return (
    <Layout style={HomeStyles.LayoutStyle}>
      <Head>
        <title>{`Sikkim News - ${router.query.slug.toUpperCase()}`}</title>
      </Head>
      {categoryDetails.attributes.articles.data.length != 0 ? (
        <>
          <NewsGrid
            articles={categoryDetails.attributes.articles.data}
            header={
              "Search Results for " +
              categoryDetails.attributes.name.charAt(0).toUpperCase() +
              categoryDetails.attributes.name.substr(1).toLowerCase()
            }
            isPageGrid
          />
        </>
      ) : (
        <p className={styles.notAvailable}>
          No Results Found for {router.query.slug.toUpperCase()}
        </p>
      )}
    </Layout>
  );
}

export default CategoryPage;

export async function getServerSideProps({ params }) {
  console.log(params.slug);
  const category = await Promise.all([
    fetchAPI("/categories", {
      filters: { slug: params.slug },
      populate: { articles: { populate: { coverImage: { populate: "*" } } } },
    }),
  ]);

  return {
    props: {
      categoryDetails: category[0].data[0] ? category[0].data[0] : null,
    },
  };
}
