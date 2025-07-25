import Image from "next/image";
import { Black_Ops_One } from "next/font/google";
import Me from "@/../public/assets/picture.jpeg"
import styles from "./aboutMe.module.scss";

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export function AboutMe({text}: { text: string }) {
  return (
    <section className={styles.section} id="about">
      <div className={styles.content}>
        <div className={styles.contentImage}>
          <Image
            src={Me}
            alt="Eu"
            width={400}
            height={400}
            className={styles.image}
          />
          <Image
            src={Me}
            alt="Eu"
            width={300}
            height={300}
            className={styles.imageMobile}
          />
        </div>
        <div className={styles.paragraph}>
          <h1 className={blackOps.className}>Sobre mim</h1>
          <p>
           {text}
          </p>
        </div>
      </div>
    </section>
  );
}
