import Layout from "@/components/Layout";
import { fetchAPI } from "../lib/api";

const Home = ({ articles }) => {
  return (
    <Layout>
      <div>
        {articles.map((article, idx) => (
          <h1 key={idx}>{article.attributes.title}</h1>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
