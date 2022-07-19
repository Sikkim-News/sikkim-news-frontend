import Carousel from "react-material-ui-carousel";
import SectionHeader from "./SectionHeader";
import CarouselCard from "./CarouselCard";
import { Card } from "@mui/material";

export default function Carrousel({ articles }) {
  const items = [
    {
      sauce:
        "https://images.unsplash.com/photo-1651303780707-a30a86b27478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
    },
    {
      sauce:
        "https://images.unsplash.com/photo-1650830907181-b62870405217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      sauce:
        "https://images.unsplash.com/photo-1504616267454-5460d659c9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      sauce:
        "https://images.unsplash.com/photo-1650237693226-9e16f19de5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];
  return (
    <div>
      <SectionHeader title="Top Stories" style={{ position: "absolute" }} />
      <Carousel>
        {articles.map((item, i) => (
          <CarouselCard key={i} article={item} />
        ))}
      </Carousel>
    </div>
  );
}
