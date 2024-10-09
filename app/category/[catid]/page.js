import { fetchAPI } from "lib/api";
import GridPrint from "./GridPrint";

export const metadata = {
  title: "Sikkim News - Categories",
  description: "Sikkim News - Categories",
};

const getData = async (slug) => {
  const category = await Promise.all([
    fetchAPI("/categories", {
      filters: { slug: slug },
      populate: { articles: { populate: { coverImage: { populate: "*" } }, sort: ["publishedAt:desc"] }},
    }),
  ]);
  console.log(category[0].data[0]);

  return category[0].data[0] ? category[0].data[0] : null;
};

export default async function CategoryPage({ params }) {
  const categoryDetails = await getData(params.catid);

  return (
      <GridPrint categoryDetails={categoryDetails} />
  );
}