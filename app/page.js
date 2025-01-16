import FullPage from "./FullPage";
import {
	getAllArticles,
	getHomeData,
	extractDatafromArticles,
} from "./helperFunctions";

export default async function Home() {
	const allArticles = await getHomeData();
	const bannerArticles = extractDatafromArticles(allArticles.bannerArticles);
	const trendingArticles = extractDatafromArticles(
		allArticles.trendingArticles
	);
	const nationalArticles = extractDatafromArticles(
		allArticles.nationalArticles
	);
	const sportsArticles = extractDatafromArticles(allArticles.sportsArticles);
	const localArticles = extractDatafromArticles(allArticles.localArticles);
	const exclusiveArticles = extractDatafromArticles(
		allArticles.exclusiveArticles
	);

	const topkArticles = await getAllArticles(10);

	return (
		<FullPage
			bannerArticles={bannerArticles}
			trendingArticles={trendingArticles}
			nationalArticles={nationalArticles}
			sportsArticles={sportsArticles}
			localArticles={localArticles}
			exclusiveArticles={exclusiveArticles}
			topArticles={extractDatafromArticles(topkArticles)}
		/>
	);
}
