import NewsCardFlat from "@/helperComponents/NewsCardFlat";
import NewsCardText from "@/helperComponents/NewsCardText";
import NewsCardVertical from "@/helperComponents/NewsCardVertical";
import NewsCardVerticalAlt from "@/helperComponents/NewsCardVerticalAlt";

export default function NewHome() {
	const data = {
		imageUrl: "https://picsum.photos/id/28/4928/3264",
		category: "Politics",
		headline: "Sikkim Government Announces New Environmental Policy",
		excerpt:
			"New measures aim to preserve the state's biodiversity while promoting sustainable development initiatives.",
		author: "Karma Dorji",
		date: "November 19, 2023",
		slug: "/",
	};
	return (
		<div className={styles.newHome}>
			<div className={styles.firstCol}>
				<NewsCardVertical {...data} />
				<NewsCardFlat {...data} />
				<NewsCardFlat {...data} />
			</div>
		</div>
	);
}
