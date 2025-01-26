"use client";

import styles from "@/styles/HomeTopLayout.module.css";
import NewsCardFlat from "@/components/helperComponents/NewsCardFlat";
import NewsCardText from "@/components/helperComponents/NewsCardText";
import NewsCardVertical from "@/helperComponents/NewsCardVertical";
import SmallCard from "@/helperComponents/SmallCard";
import SectionHeader from "../SectionHeader";

export default function HomeTopLayout({ articles1, articles2 }) {
	// console.log(articles1.articles);
	return (
		<div className={styles.topLayout}>
			<div className={styles.mainStory}>
				<NewsCardVertical {...articles1.articles[0]} />
				{articles1.articles.slice(1, 3).map((article, index) => (
					<NewsCardFlat key={index} {...article} />
				))}
			</div>

			<div className={styles.mainFeature}>
				<NewsCardFlat {...articles1.articles[4]} />
				<NewsCardFlat {...articles1.articles[5]} />
				<NewsCardFlat {...articles1.articles[6]} />
				{articles1.articles.slice(7, 9).map((article, index) => (
					<NewsCardText key={index} {...article} />
				))}
			</div>

			<div className={styles.lastCol}>
				<SectionHeader title={articles2.category} />
				<div className={styles.lastColArticles}>
					<SmallCard {...articles2.articles[0]} />
					{articles2.articles.slice(1, 2).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
					<NewsCardText {...articles2.articles[2]} />
				</div>
			</div>
		</div>
	);
}
