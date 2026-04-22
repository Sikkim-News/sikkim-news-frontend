"use client";

import styles from "@/styles/HomeTopLayout.module.css";
import NewsCardFlat from "@/components/helperComponents/NewsCardFlat";
import NewsCardText from "@/components/helperComponents/NewsCardText";
import NewsCardVertical from "@/helperComponents/NewsCardVertical";
import SmallCard from "@/helperComponents/SmallCard";
import SectionHeader from "../SectionHeader";

export default function HomeTopLayout({ articles1, articles2 }) {
	const primaryArticles = articles1?.articles ?? [];
	const latestArticles = articles2?.articles ?? [];

	return (
		<div className={styles.topLayout}>
			<div className={styles.mainStory}>
				{primaryArticles[0] && <NewsCardVertical {...primaryArticles[0]} />}
				{primaryArticles.slice(1, 3).map((article, index) => (
					<NewsCardFlat key={index} {...article} />
				))}
			</div>

			<div className={styles.mainFeature}>
				{primaryArticles[4] && <NewsCardFlat {...primaryArticles[4]} />}
				{primaryArticles[5] && <NewsCardFlat {...primaryArticles[5]} />}
				{primaryArticles[6] && <NewsCardFlat {...primaryArticles[6]} />}
				{primaryArticles.slice(7, 9).map((article, index) => (
					<NewsCardText key={index} {...article} />
				))}
			</div>

			<div className={styles.lastCol}>
				<SectionHeader title={articles2.category} />
				<div className={styles.lastColArticles}>
					{latestArticles[0] && <SmallCard {...latestArticles[0]} />}
					{latestArticles.slice(1, 3).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
					<NewsCardText {...articles2.articles[2]} />
				</div>
			</div>
		</div>
	);
}
