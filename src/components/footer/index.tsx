"use client";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Copyright © 2025, feito com muito amor por{" "}
          <a href="" target="_blank">
            Kaylane Guarino
          </a>
          <FaHeart />
        </p>
      </div>
    </footer>
  );
}
