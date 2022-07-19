import styles from "@/styles/Sectionheader.module.css";

export default function SectionHeader({ title, style }) {
  return (
    <div className={styles.sectionHeader} style={style}>
      {title}
    </div>
  );
}
