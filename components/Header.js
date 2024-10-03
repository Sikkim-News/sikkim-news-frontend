import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Sidebar from "./Sidebar";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import MountainImage from "../public/resources/mountains.png";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        height: "65px",
        backgroundImage: `url(${MountainImage.src})`,
        backgroundPosition: "50% 22%",
        // backgroundSize: "cover",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image
              src="/resources/logo-original.png"
              width={60}
              height={60}
              alt="logo"
            />
          </Link>
        </div>

        <HeaderNav />
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
}
