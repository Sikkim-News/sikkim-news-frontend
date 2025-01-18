"use client";
import styles from "@/styles/HomePage.module.css";
import HomeTopLayout from "@/layoutComponents/HomeTopLayout";
import ThreeColumnLayout from "@/layoutComponents/ThreeColumnLayout";
import FlatCardHorizontal from "@/layoutComponents/FlatCardHorizontal";
import ThreeColumnLayout2 from "@/layoutComponents/ThreeColumnLayout2";

export default function FullPage(props) {
	const articlesWithCategory = {
		bannerArticles: {
			category: "Trending Now",
			articles: props.bannerArticles,
		},
		trendingArticles: {
			category: "Trending Now",
			articles: props.trendingArticles,
		},
		nationalArticles: {
			category: "National Updates",
			articles: props.nationalArticles,
		},
		sportsArticles: {
			category: "Sports Updates",
			articles: props.sportsArticles,
		},
		localArticles: {
			category: "Local Updates",
			articles: props.localArticles,
		},
		exclusiveArticles: {
			category: "SN Exclusives",
			articles: props.exclusiveArticles,
		},
		topArticles: {
			category: "Latest Updates",
			articles: props.topArticles,
		},
	};
	return (
		<div className={styles.HomePage}>
			<HomeTopLayout
				articles1={articlesWithCategory.bannerArticles}
				articles2={articlesWithCategory.topArticles}
			/>
			<ThreeColumnLayout {...articlesWithCategory.localArticles} />
			<FlatCardHorizontal {...articlesWithCategory.sportsArticles} />
			<ThreeColumnLayout2
				articles1={articlesWithCategory.nationalArticles}
				articles2={articlesWithCategory.exclusiveArticles}
			/>
		</div>
	);
}
