import { Button, ButtonGroup } from "@mui/material";

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
      disableElevation
      sx={{
        height: "66px",
        borderRadius: "0",
        display: { xs: "none", md: "flex" },
      }}
    >
      {categories.map((category, idx) => (
        <Button
          href="#"
          variant="text"
          sx={{
            borderRadius: "0",
            color: "#000",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontFamily: "Poppins",
            fontSize: "1rem",
          }}
          key={idx}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
}
