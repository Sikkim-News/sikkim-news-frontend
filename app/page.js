import FullPage from "./FullPage";
import {
	getAllArticles,
	getHomeData,
	getHomepageVideos,
	extractDatafromArticles,
} from "./helperFunctions";

const EMPTY_HOME = {
	bannerArticles: [],
	trendingArticles: [],
	nationalArticles: [],
	sportsArticles: [],
	localArticles: [],
	exclusiveArticles: [],
};

export default async function Home() {
	const [allArticles, homepageVideos, topkArticles] = await Promise.all([
		getHomeData().catch(() => EMPTY_HOME),
		getHomepageVideos(),
		getAllArticles(10).catch(() => []),
	]);

	return (
		<FullPage
			bannerArticles={extractDatafromArticles(allArticles.bannerArticles)}
			trendingArticles={extractDatafromArticles(allArticles.trendingArticles)}
			nationalArticles={extractDatafromArticles(allArticles.nationalArticles)}
			sportsArticles={extractDatafromArticles(allArticles.sportsArticles)}
			localArticles={extractDatafromArticles(allArticles.localArticles)}
			exclusiveArticles={extractDatafromArticles(allArticles.exclusiveArticles)}
			homepageVideos={homepageVideos}
			topArticles={extractDatafromArticles(topkArticles)}
		/>
	);
}
