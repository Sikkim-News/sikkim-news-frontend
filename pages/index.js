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
    url: "https://twitter.com/SikkimNews1?t=EXyI_I8opzDWdiHsHrS9_g&s=08",
  },
  { icon: <Telegram />, url: "https://t.me/SikkimNews1" },
  {
    icon: <Instagram />,
    url: "https://instagram.com/sikkimnews1?utm_medium=copy_link",
  },
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
