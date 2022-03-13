import styles from "@/styles/HomePage.module.css";
import {
  FacebookRounded,
  Telegram,
  Twitter,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";

const socialMediaLinks = [
  {
    icon: <FacebookRounded />,
    url: "https://www.facebook.com/SikkimNews.NoFavourNoFear",
  },
  {
    icon: <YouTube />,
    url: "https://www.youtube.com/channel/UCjBaF2Ro5OlcKv-N5dwhx2A",
  },
  {
    icon: <Twitter />,
    url: "https://www.youtube.com/channel/UCjBaF2Ro5OlcKv-N5dwhx2A",
  },
  { icon: <Telegram />, url: "https://www.google.com" },
  { icon: <Instagram />, url: "https://www.instagram.com" },
];

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.overlay}>
        <div>
          <Image
            src="/resources/logo-dark.png"
            height={100}
            width={100}
            // layout="fill"
            alt="Logo Sikkim News"
          />
        </div>
        Our Website is Under Construction
        <div className={styles.socialmedia}>
          <span>Follow us and stay updated!</span>
          <div>
            {socialMediaLinks.map((element, idx) => (
              <IconButton
                style={{ color: "#ae2012" }}
                key={idx}
                href={element.url}
                target="_blank"
              >
                {element.icon}
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
