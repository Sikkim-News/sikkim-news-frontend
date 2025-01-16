import styles from "@/styles/FlatCardHorizontal.module.css";
import SectionHeader from "../SectionHeader";
import NewsCardFlat from "@/helperComponents/NewsCardFlat";

export default function FlatCardHorizontal({ category, articles, displayAll }) {
	return (
		<section className={styles.latestNews}>
			<SectionHeader title={category} />
			<div className={styles.latestGrid}>
				{displayAll &&
					articles.map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
				{!displayAll &&
					articles
						.slice(0, 6)
						.map((article, index) => <NewsCardFlat key={index} {...article} />)}
			</div>
		</section>
	);
}
