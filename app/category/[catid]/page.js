import GridPrint from "./GridPrint";
import { extractDatafromArticles, getDataforCategory } from "app/helperFunctions";

export const metadata = {
	title: "Sikkim News - Categories",
	description: "Sikkim News - Categories",
};

export default async function CategoryPage({ params }) {
	const categoryDetails = await getDataforCategory(params.catid);
	// Support both Strapi v4 (.attributes.articles.data) and v5 (.articles)
	const allArticles = extractDatafromArticles(
		categoryDetails?.attributes?.articles?.data ?? categoryDetails?.articles ?? []
	);

	return <GridPrint category={params.catid} articles={allArticles} />;
}
