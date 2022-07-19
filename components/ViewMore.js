import { Button } from "@mui/material";
import Link from "next/link";

export default function ViewMore({ className, slug }) {
  return (
    <Link href={`/category/${slug}`} passHref>
      <Button
        className={className}
        sx={{
          width: "100%",
          fontFamily: "Poppins",
          color: "black",
          textAlign: "center",
        }}
      >
        View More
      </Button>
    </Link>
  );
}
