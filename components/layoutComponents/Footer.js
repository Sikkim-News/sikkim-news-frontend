"use client";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import SocialMedia from "@/helperComponents/SocialMedia";

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
				<Link href="/terms_and_conditions">Terms & Conditions</Link>
				<Link href="/privacy_policy">Privacy Policy</Link>
			</div>
			<div className={styles.footerLinks__cols}>
				<Link href="/contact">Contact Us</Link>
				<Link href="/disclaimer">Disclaimer</Link>
			</div>
		</div>
	);
}
