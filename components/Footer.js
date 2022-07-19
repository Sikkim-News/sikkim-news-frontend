import styles from "@/styles/Footer.module.css";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Made With ❤️ in India</span>
      <span>
        <span className={styles.copyright}>©</span> All Rights Reserved. Sikkim
        News Pvt. Ltd.
      </span>
      <SocialMedia dark />
    </footer>
  );
}
