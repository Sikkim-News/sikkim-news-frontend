"use client";
import Link from "next/link";
import styles from "@/styles/Head.module.css";

const categories = [
  "Exclusives",
  "Politics",
  "National",
  "International",
  "Local",
  "Sports",
];

export default function HeaderNav() {
  return (
    <nav className={styles.header__nav}>
      {categories.map((category) => (
        <Link 
          key={category} 
          href={`/category/${category.toLowerCase()}`}
          className={styles.header__category}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
