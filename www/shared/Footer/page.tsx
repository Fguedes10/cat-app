import styles from "./page.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.copyright}>
        <p>2024, cats.com, Inc.</p>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.links} href="/privacyPolicy">
          Privacy Policy
        </Link>
        <Link className={styles.links} href="/faqs">
          Faq's
        </Link>
        <Link className={styles.links} href="/contacts">
          Contacts
        </Link>
      </div>
    </div>
  );
};
export default Footer;
