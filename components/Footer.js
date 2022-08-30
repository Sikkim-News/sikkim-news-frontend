import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterLinks />
      <span>Made With ❤️ in India</span>
      <span>
        <span className={styles.copyright}>©</span> All Rights Reserved. Sikkim
        News Pvt. Ltd.
      </span>
      <SocialMedia dark />
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.footerLinks__cols}>
        <Link href="/">
          <a>Terms of Use</a>
        </Link>
        <Link href="/">
          <a>Privacy Policy</a>
        </Link>
      </div>
      <div className={styles.footerLinks__cols}>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
        <Link href="/">
          <a>Advertise With Us</a>
        </Link>
      </div>
    </div>
  );
}
