import { Card, CardMedia } from "@mui/material";
import Link from "next/link";
import { toHeadlineByChars } from "./helpers";

export default function CarouselCard({ article }) {
  return (
    <Link href={`/${article.attributes.slug}`} passHref legacyBehavior>
      <Card
        sx={{
          height: "500px",
          borderRadius: "0",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          height="500"
          image={
            article.attributes.coverImage.image.data.attributes.formats.small
              ?.url
          }
          alt="green iguana"
        />
        <div
          style={{
            padding: "10px 5px 5px 5px",
            position: "absolute",
            bottom: 0,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ fontSize: "1.4rem", textAlign: "justify", fontFamily:"Poppins" }}>{toHeadlineByChars(article.attributes.title, 130)}</p>
        </div>
      </Card>
    </Link>
  );
}
