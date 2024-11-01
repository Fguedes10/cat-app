import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image src="/catLogo.png" width={100} height={100} alt="logo image" />
      </div>
      <div className={styles.linksContainer}>
        <Link className={styles.links} href="/">Home</Link>
        <Link className={styles.links} href="/cats">Cats</Link>
        <Link className={styles.links} href="/about">About</Link>
      </div>
      <div className={styles.buttonContainer}>
        <button>Login</button>
        </div>
    </div>
  );
};

export default Navbar;
