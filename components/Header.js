import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Sidebar from "./Sidebar";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ height: "65px", backgroundColor: "#f5f3f4" }}
      variant="outlined"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" passHref={true}>
          <Image
            src="/resources/logo-original.png"
            width={60}
            height={60}
            alt="logo"
          />
        </Link>

        <HeaderNav />
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
}
