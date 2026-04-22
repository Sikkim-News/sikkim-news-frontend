import styles from "@/styles/ThreeColumnLayout2.module.css";
import SectionHeader from "../SectionHeader";
import NewsCardVerticalAlt from "@/helperComponents/NewsCardVerticalAlt";
import NewsCardText from "@/helperComponents/NewsCardText";
import NewsCardVerticalCompact from "@/helperComponents/NewsCardVerticalCompact";
import NewsCardFlat from "@/helperComponents/NewsCardFlat";

export default function ThreeColumnLayout2({ articles1, articles2 }) {
	const primary = articles1?.articles ?? [];
	const secondary = articles2?.articles ?? [];

	return (
		<div className={styles.featuredSections}>
			{/* Trending Now */}
			<section className={styles.trendingSection}>
				<SectionHeader title={articles1.category} />
				<div className={styles.trendingGrid}>
					{primary[0] && <NewsCardVerticalAlt {...primary[0]} />}
					<div className={styles.trendingUpdates}>
						{primary.slice(4, 8).map((article, index) => (
							<NewsCardText key={index} {...article} />
						))}
					</div>
					{primary.slice(1, 3).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
				</div>
			</section>

			{/* Regional Updates */}
			<section className={styles.regionalSection}>
				<SectionHeader title={articles2.category} />
				<div className={styles.regionalGrid}>
					{secondary[0] && <NewsCardVerticalCompact {...secondary[0]} />}
					{secondary[1] && <NewsCardFlat {...secondary[1]} />}
				</div>
			</section>
		</div>
	);
}
