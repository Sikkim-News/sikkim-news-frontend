import styles from "@/styles/Sectionheader.module.css";
import ViewMore from "./ViewMore";

export default function SectionHeader({ title, style, viewMore, categorySlug }) {
  return (
    <div className={styles.sectionHeaderContainer}>
      <div className={styles.headerContent}>
        <div className={styles.sectionHeader} style={style}>
          {title}
        </div>
        {viewMore && (
          <ViewMore className={styles.viewMore} slug={categorySlug} />
        )}
      </div>
      <div className={styles.sectionHeaderUnderline}></div>
    </div>
  );
}
