import FullPage from "./FullPage";
import {
	getAllArticles,
	getHomeData,
	getHomepageVideos,
	extractDatafromArticles,
} from "./helperFunctions";

export default async function Home() {
	const [allArticles, homepageVideos, topkArticles] = await Promise.all([
		getHomeData(),
		getHomepageVideos(),
		getAllArticles(10),
	]);
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

	return (
		<FullPage
			bannerArticles={bannerArticles}
			trendingArticles={trendingArticles}
			nationalArticles={nationalArticles}
			sportsArticles={sportsArticles}
			localArticles={localArticles}
			exclusiveArticles={exclusiveArticles}
			homepageVideos={homepageVideos}
			topArticles={extractDatafromArticles(topkArticles)}
		/>
	);
}
