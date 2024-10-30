import styles from "./page.module.css";
import Image from "next/image";

const HomePage = () => {

    return(
        <div className={styles.mainContainer}>
          <Image src="/banner-cats.png" width={1200} height={300} alt="home page image" />
        <section className={styles.intro}>
          <h1>Welcome to Cats website – Your Ultimate Cat Haven!</h1>
          <p>
            Whether you’re a lifelong cat lover or a new cat parent, you’re in the
            right place! Here at Purrfect Paws, we’re all about celebrating our
            feline friends in every way possible. From tips on caring for your
            cuddly companions to guides on understanding their unique
            personalities, we've got everything you need to keep your cat healthy,
            happy, and entertained.
          </p>
        </section>
      </div>
    )
}

export default HomePage;