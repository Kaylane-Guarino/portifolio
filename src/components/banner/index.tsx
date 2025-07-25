"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import { Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Image from "next/image";

import Me from "@/../public/assets/eu.png";
import styles from "./banner.module.scss";

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export function Banner({locale}: { locale: string }) {
  const texts = ["Kaylane", "Dev Frontend"];
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let i = typedText.length;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && i < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, i + 1));
      }, 150);
    } else if (isDeleting && i > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, i - 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, textIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <h4 className={styles.greetings}>HELLO WORLD 👋🏻</h4>
          <h1 className={`${blackOps.className} ${styles.title}`}>
            Eu sou <span className={styles.typewriter}>{typedText}</span>
          </h1>
          <p className={styles.locale}>
            <EnvironmentOutlined /> {locale}
          </p>
          <Link href="/#talk-to-me" className={styles.button}>Fale Comigo</Link>
        </div>
        <div className={styles.picture}>
          <Image
            src={Me}
            width={350}
            height={400}
            alt="EU"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
