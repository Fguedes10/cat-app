import styles from "./page.module.css";
import Loading from "../www/shared/Loading/page"
import HomePage from "../www/Pages/Home/page"

export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <HomePage />
    </div>
  );
}
