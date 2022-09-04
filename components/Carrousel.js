import Carousel from "react-material-ui-carousel";
import SectionHeader from "./SectionHeader";
import CarouselCard from "./CarouselCard";

export default function Carrousel({ articles }) {
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
