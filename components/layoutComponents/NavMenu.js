"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Head.module.css";
import SocialMedia from "@/helperComponents/SocialMedia";

const categories = [
  "Exclusives",
  "Politics",
  "National",
  "International",
  "Local",
  "Sports",
];

export default function NavMenu({ sidebar, closeSidebar }) {
  return (
    <nav
      className={
        sidebar
          ? `${styles.nav__menu} ${styles.active}`
          : `${styles.nav__menu}`
      }
    >
      <div className={styles.nav__top}>
        <div className={styles.nav__top_logo}>
          <Image
            src="/resources/logo-original.png"
            width={80}
            height={80}
            alt="logo"
          />
          <div className={styles.nav__top_text_container}>
            <span className={styles.nav__top_text}>SIKKIM NEWS</span>
            <span className={styles.nav__top_subtitle}>Categories</span>
          </div>
        </div>
      </div>

      <div className={styles.nav__menu_items}>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase()}`}
            className={styles.menu__item}
            onClick={closeSidebar}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className={styles.nav__social}>
        <SocialMedia />
      </div>
    </nav>
  );
}
