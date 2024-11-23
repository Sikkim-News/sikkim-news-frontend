import Link from "next/link";
import styles from "@/styles/Sectionheader.module.css";

export default function ViewMore({ className, slug }) {
  return (
    <Link href={`/category/${slug}`} className={styles.viewMoreLink}>
      View More
    </Link>
  );
}
