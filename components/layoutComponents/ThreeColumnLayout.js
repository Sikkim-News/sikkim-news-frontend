import NewsCardFlat from "@/helperComponents/NewsCardFlat";
import styles from "@/styles/ThreeColumnLayout.module.css";
import NewsCardText from "@/helperComponents/NewsCardText";
import NewsCardVerticalAlt from "@/helperComponents/NewsCardVerticalAlt";
import NewsCardVerticalCompact from "@/helperComponents/NewsCardVerticalCompact";
import SmallCard from "@/helperComponents/SmallCard";
import SectionHeader from "../SectionHeader";

export default function ThreeColumnLayout({ category, articles }) {
	const data = articles[0];

	return (
		<div>
			<SectionHeader title={category} />
			<div className={styles.newHome}>
				<div className={styles.firstCol}>
					<NewsCardVerticalAlt {...articles[1]} />
					{articles.slice(2, 4).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
					<NewsCardText {...articles[11]} />
				</div>
				<div className={styles.firstCol}>
					<SmallCard {...articles[0]} />
					<NewsCardFlat {...articles[5]} />
					<NewsCardText {...articles[10]} />
				</div>
				<div className={styles.firstCol}>
					<NewsCardVerticalCompact {...articles[6]} />
					{articles.slice(7, 9).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
				</div>
			</div>
		</div>
	);
}
