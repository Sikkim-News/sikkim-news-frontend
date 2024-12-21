import React from "react";
import SocialMedia from "@/helperComponents/SocialMedia";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { IconButton, ListItemButton, Typography } from "@mui/material";
import Link from "next/link";

const categories = [
  "Exclusives",
  "Politics",
  "National",
  "International",
  "North East",
  "Local",
  "Sports",
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };
  const list = () => (
    <Box sx={{ width: "70vw" }} role="presentation">
      <Typography
        component="h4"
        variant="h5"
        align="center"
        fontFamily="Poppins"
        fontWeight="600"
        sx={{ marginTop: 3 }}
      >
        Categories
      </Typography>

      <List onClick={toggleDrawer(false)}>
        {categories.map((text) => (
          <Link
            key={text}
            href={`/category/${text.replace(/ /g, "").toLowerCase()}`}
            passHref
            legacyBehavior>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                }}
                primary={text}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <SocialMedia />
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ alignSelf: "right", display: { md: "none", xs: "block" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
