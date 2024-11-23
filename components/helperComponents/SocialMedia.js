import {
  FacebookRounded,
  Telegram,
  Twitter,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

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

export default function SocialMedia({ dark }) {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        alignContent: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {socialMediaLinks.map((element, idx) => (
        <IconButton
          style={{
            color: dark ? "#fff" : "#000",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          key={idx}
          href={element.url}
          target="_blank"
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#ba181b";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = dark ? "#fff" : "#000";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {element.icon}
        </IconButton>
      ))}
    </Box>
  );
}
