import styles from "@/styles/Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { ButtonGroup } from "@mui/material";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="/resources/logo-original.png"
        width={70}
        height={70}
        alt="logo"
      />

      <Sidebar />
    </div>
  );
}
