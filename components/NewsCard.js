import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import styles from "@/styles/NewsCard.module.css";
import Link from "next/link";

function NewsCard({ imageUrl, headline, createdAt, slug }) {
  return (
    <Link href={`/${slug}`} passHref>
      <Card className={styles.card}>
        <CardActionArea className={styles.cardActionArea}>
          <CardMedia
            component="img"
            height={120}
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent className={styles.cardContent}>
            <p>{new Date(createdAt).toDateString()}</p>
            <p className={styles.headline}>{headline}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default NewsCard;
