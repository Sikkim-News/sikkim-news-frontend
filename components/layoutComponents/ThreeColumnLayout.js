import NewsCardFlat from "@/helperComponents/NewsCardFlat";
import styles from "@/styles/ThreeColumnLayout.module.css";
import NewsCardText from "@/helperComponents/NewsCardText";
import NewsCardVerticalAlt from "@/helperComponents/NewsCardVerticalAlt";
import NewsCardVerticalCompact from "@/helperComponents/NewsCardVerticalCompact";
import SmallCard from "@/helperComponents/SmallCard";
import SectionHeader from "../SectionHeader";

export default function ThreeColumnLayout({ category, articles }) {
	const items = articles ?? [];

	return (
		<div>
			<SectionHeader title={category} />
			<div className={styles.newHome}>
				<div className={styles.firstCol}>
					{items[1] && <NewsCardVerticalAlt {...items[1]} />}
					{items.slice(2, 4).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
					<NewsCardText {...articles[11]} />
				</div>
				<div className={styles.firstCol}>
					{items[0] && <SmallCard {...items[0]} />}
					{items[5] && <NewsCardFlat {...items[5]} />}
					{items[10] && <NewsCardText {...items[10]} />}
				</div>
				<div className={styles.firstCol}>
					{items[6] && <NewsCardVerticalCompact {...items[6]} />}
					{items.slice(7, 9).map((article, index) => (
						<NewsCardFlat key={index} {...article} />
					))}
				</div>
			</div>
		</div>
	);
}
