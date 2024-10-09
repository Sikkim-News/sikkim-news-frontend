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
    elevation={0}
    sx={
      {
        backgroundColor: "transparent",
        borderBottom: "3px solid #000",
      }
    }
      position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image
              src="/resources/logo-original.png"
              width={70}
              height={70}
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
