"use client";
import styles from "@/styles/ContactPage.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SocialMedia from "@/helperComponents/SocialMedia";

// export const metadata= {
//   title: 'Contact Us',
//   description: 'Contact us for any queries or suggestions.'
// }

const socialMediaLinks = [
	{
		icon: <FacebookIcon />,
		url: "https://www.facebook.com/SikkimNews.NoFavourNoFear",
	},
	{
		icon: <YouTubeIcon />,
		url: "https://www.youtube.com/channel/UCjBaF2Ro5OlcKv-N5dwhx2A",
	},
	{
		icon: <TwitterIcon />,
		url: "https://twitter.com/SikkimNews1?t=EXyI_I8opzDWdiHsHrS9_g&s=08",
	},
	{ icon: <TelegramIcon />, url: "https://t.me/SikkimNews1" },
	{
		icon: <InstagramIcon />,
		url: "https://instagram.com/sikkimnews1?utm_medium=copy_link",
	},
];

const contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heroSection}>
				<h1 className={styles.title}>We would love to hear from you!</h1>
				<p className={styles.subtitle}>
					Reach out to us anytime, and we will respond as soon as possible.
				</p>
			</div>

			<div className={styles.contactSection}>
				<div className={styles.contactCard}>
					<LocationOnIcon className={styles.iconLarge} />
					<h3>Our Location</h3>
					<p>
						Near Traffic Point, Upper Bazar, Rangpo, East Sikkim, Pin: 737132
					</p>
				</div>

				<div className={styles.contactCard}>
					<PhoneIcon className={styles.iconLarge} />
					<h3>Call Us</h3>
					<p>+91 7001150174</p>
				</div>

				<div className={styles.contactCard}>
					<EmailIcon className={styles.iconLarge} />
					<h3>Email Us</h3>
					<p>thetimesofsikkim@gmail.com</p>
				</div>
			</div>

			<div className={styles.socialMediaSection}>
				<h2>Connect with us</h2>
				<p>Follow us on our social media platforms to stay updated:</p>
				<div className={`${styles.socialIcons}`}>
					<SocialMedia dark={false} />
					{/* {socialMediaLinks.map((element, idx) => (
						<IconButton
							// className={`${styles.socialIcon} ${styles.iconHover}`}
							key={idx}
							href={element.url}
							target="_blank"
							onMouseOver={(e) => {
								e.currentTarget.style.color = "#ba181b";
								e.currentTarget.style.transform = "scale(1.2)";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.color = "#000";
								e.currentTarget.style.transform = "scale(1)";
							}}
						>
							{element.icon}
						</IconButton>
					))} */}
					{/* <Link href="https://www.facebook.com/SikkimNews.NoFavourNoFear">
						<FacebookIcon
							className={`${styles.socialIcon} ${styles.iconHover}`}
						/>
					</Link> */}
				</div>
			</div>

			<div className={styles.extraSection}>
				<h2>Business Inquiries</h2>
				<p>
					If you are looking to collaborate or have any business inquiries, feel
					free to reach out to us!
				</p>
				{/* <button className={styles.contactButton}>Get in Touch</button> */}
			</div>
		</div>
	);
};

export default contact;
