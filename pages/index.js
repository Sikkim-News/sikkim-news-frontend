import styles from "@/styles/HomePage.module.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Header />
      <Layout/>
    </div>
  );
}
