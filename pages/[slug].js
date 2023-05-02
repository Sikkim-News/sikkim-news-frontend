import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { fetchAPI } from "lib/api";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styles from "@/styles/NewsPage.module.css";
import SocialMediaNewsShare from "@/components/SocialMediaNewsShare";

export default function NewsPage({ article }) {
  const seo = {
    title: article.attributes.title,
    description: article.attributes.description,
    image:
      article.attributes.coverImage.image.data.attributes.formats.small.url,
  };

  return (
    <Layout>
      <Head>
        <title>{seo.title}</title>
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />

        <meta name="description" content={seo.description} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />

        <meta property="og:image" content={seo.image} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="image" content={seo.image} />

        {article && <meta property="og:type" content="article" />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box sx={{ padding: "1rem", maxWidth: "900px" }} component="article">
        <Typography
          fontSize="2rem"
          variant="h4"
          fontFamily="Poppins"
          fontWeight="500"
        >
          {article.attributes.title.toUpperCase()}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1rem",
          }}
        >
          <Typography fontFamily="Poppins" component="span">
            {article.attributes.author.data.attributes.name}
          </Typography>
          <Typography fontFamily="Poppins" component="span">
            {new Date(article.attributes.publishedAt).toDateString()}
          </Typography>
        </Box>

        <div className={`${styles.image_wrapper}`}>
          <Image
            width={400}
            height={200}
            // layout="fill"
            src={
              article.attributes.coverImage.image.data.attributes.formats.small
                .url
            }
            alt="news-image"
          />
        </div>

        <Typography
          sx={{
            whiteSpace: "pre-line",
            fontSize: "1rem",
            textAlign: "justify",
            fontFamily: "Raleway",
            textJustify: "inter-word",
          }}
        >
          <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
        </Typography>
      </Box>
      <SocialMediaNewsShare article={article} />
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

//   return {
//     paths: articlesRes.data.map((article) => ({
//       params: {
//         slug: article.attributes.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const articlesRes = await fetchAPI("/articles", {
//     filters: { slug: params.slug },
//     populate: { coverImage: { populate: "*" }, categories: "*", author: "*" },
//   });

//   return {
//     props: { article: articlesRes.data[0] },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ params }) {
  const article = await Promise.all([
    fetchAPI("/articles", {
      filters: { slug: params.slug },
      populate: { coverImage: { populate: "*" }, categories: "*", author: "*" },
    }),
  ]);

  return {
    props: { article: article[0].data[0] },
  };
}
