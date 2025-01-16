import styles from "@/styles/Sectionheader.module.css";
import ViewMore from "./ViewMore";

export default function SectionHeader({
	title,
	style,
	viewMore,
	categorySlug,
}) {
	return (
		<>
			<div className={styles.sectionHeader} style={style}>
				{title}
			</div>
			<div className={styles.sectionHeaderUnderline} />
		</>
	);
}
