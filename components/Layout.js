import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
