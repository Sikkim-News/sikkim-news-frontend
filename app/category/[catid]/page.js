import { fetchAPI } from "lib/api";
import GridPrint from "./GridPrint";
import {
	extractDatafromArticles,
	getDataforCategory,
} from "app/helperFunctions";

export const metadata = {
	title: "Sikkim News - Categories",
	description: "Sikkim News - Categories",
};

export default async function CategoryPage({ params }) {
	const categoryDetails = await getDataforCategory(params.catid);
	const allArticles = await extractDatafromArticles(
		categoryDetails.attributes.articles.data
	);

	console.log(allArticles);
	return <GridPrint category={params.catid} articles={allArticles} />;
}
