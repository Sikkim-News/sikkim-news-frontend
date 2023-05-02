import { Carousel } from "react-responsive-carousel";
import SectionHeader from "./SectionHeader";
import CarouselCard from "./CarouselCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrousel({ articles }) {
  return (
    <div>
      <SectionHeader title="Top Stories" style={{ position: "absolute" }} />
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
      >
        {articles.map((item, i) => (
          <CarouselCard key={i} article={item} />
        ))}
      </Carousel>
    </div>
  );
}
