import Header from "@/components/Header";
import { newsArticles } from "dummydata";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";

export default function NewsPage() {
  // console.log(newsArticles);
  return (
    <div>
      <Header />
      <Box sx={{ padding: "1rem", maxWidth: "900px" }} component="article">
        <Typography variant="h4" fontFamily="Poppins" fontWeight="500">
          {newsArticles[0].headline.toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontFamily="Poppins" component="span">
            {newsArticles[0].author}
          </Typography>
          <Typography fontFamily="Poppins" component="span">
            {newsArticles[0].createdDate}
          </Typography>
        </Box>

        <Image
          width={500}
          height={400}
          src={newsArticles[0].images[0]}
          alt="news-image"
          layout="responsive"
        />

        <Typography sx={{ whiteSpace: "pre-line" }}>
          {newsArticles[0].body}
        </Typography>
      </Box>
    </div>
  );
}
