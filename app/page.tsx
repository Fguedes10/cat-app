import styles from "./page.module.css";
import HomePage from "../www/Pages/Home/page"

export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <HomePage />
    </div>
  );
}
