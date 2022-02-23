import styles from "@/styles/HomePage.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <h1>Cheers To A New Beginning!</h1>
      <Header />
    </div>
  );
}
