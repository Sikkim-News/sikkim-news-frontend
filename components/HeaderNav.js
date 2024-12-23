import { Button, ButtonGroup } from "@mui/material";
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

export default function HeaderNav() {
  return (
    <ButtonGroup
      sx={{
        height: "66px",
        borderRadius: "0",
        display: { xs: "none", md: "flex" },
      }}
    >
      {categories.map((category, idx) => (
        <Link
          key={idx}
          href={`/category/${category.replace(/ /g, "").toLowerCase()}`}
          passHref
          legacyBehavior>
          <Button
            variant="text"
            sx={{
              borderRadius: "0",
              color: "#000",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              fontFamily: "Raleway",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            {category}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  );
}
