import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { fetchAPI } from "lib/api";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function NewsPage({ article }) {
  return (
    <Layout>
      <Box sx={{ padding: "1rem", maxWidth: "900px" }} component="article">
        <Typography variant="h4" fontFamily="Poppins" fontWeight="500">
          {article.attributes.title.toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontFamily="Poppins" component="span">
            {article.attributes.author.data.attributes.name}
          </Typography>
          <Typography fontFamily="Poppins" component="span">
            {new Date(article.attributes.publishedAt).toDateString()}
          </Typography>
        </Box>

        <Image
          width={300}
          height={200}
          src={
            article.attributes.coverImage.image.data.attributes.formats.small
              .url
          }
          alt="news-image"
        />

        <Typography
          sx={{
            whiteSpace: "pre-line",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
        </Typography>
      </Box>
    </Layout>
  );
}

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