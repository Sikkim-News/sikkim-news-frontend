"use client";
import Image from "next/image";
import styles from "@/styles/Head.module.css";
import * as FaIcons from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import HeaderNav from "../helperComponents/HeaderNav";
import NavMenu from "../helperComponents/NavMenu";

export default function Header() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const closeSidebar = () => setSidebar(false);

	return (
		<>
			<header className={styles.header__main}>
				<Link href="/">
					<Image
						src="/resources/logo-original.png"
						width={80}
						height={80}
						alt="logo"
						className={styles.header__logo}
					/>
				</Link>
				<HeaderNav />
				{/* <Link href="/home" className={styles.header__contact}>
					Contact Us
				</Link> */}
				<div className={`${styles.navbar}`}>
					<Link href="#" className={`${styles.menu__bars}`}>
						<FaIcons.FaBars onClick={showSidebar} size={25} />
					</Link>
				</div>
			</header>

			<div className={styles.header__underline} />

			<div
				className={`${styles.overlay} ${sidebar ? styles.active : ""}`}
				onClick={closeSidebar}
			/>
			<NavMenu sidebar={sidebar} closeSidebar={closeSidebar} />
		</>
	);
}
