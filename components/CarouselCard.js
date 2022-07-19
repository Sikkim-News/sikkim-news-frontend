import { Card, CardMedia } from "@mui/material";
import Link from "next/link";

export default function CarouselCard({ article }) {
  return (
    <Link href={`/${article.attributes.slug}`} passHref>
      <Card
        sx={{
          height: "300px",
          borderRadius: "0",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          height="300"
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
            width: "100%",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ fontSize: "1.4rem" }}>{article.attributes.title}</p>
        </div>
      </Card>
    </Link>
  );
}
