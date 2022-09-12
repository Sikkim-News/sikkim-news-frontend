import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";

function Layout({ children, style }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={`${styles.layout__children} ${style}`}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
