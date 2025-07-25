"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import InstagramIcon from "@/icons/intagram";
import GitHubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";
import styles from "./header.module.scss";

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const getColor = (id: string) => {
    if (hovered === id) {
      if (id === "instagram") return "#b00262";
      if (id === "github") return "#ffffff";
      if (id === "linkedin") return "#0254a1";
    }
    return !isScrolled ? "#6ed309" : "#FFFFFF";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionId = (label: string) => {
    switch (label) {
      case "Sobre mim":
        return "#about";
      case "Conhecimentos":
        return "#knowledge";
      case "Fale comigo":
        return "#talk-to-me";
      default:
        return "#";
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.content}>
        <nav>
          <Link href="/" className={`${blackOps.className} ${styles.logo}`}>
            {"<KGS />"}
          </Link>
          <ul>
  <li className={styles.item}>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        const section = document.querySelector("#about");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Sobre mim
    </a>
  </li>
  <li className={styles.item}>
    <a
      href="#knowledge"
      onClick={(e) => {
        e.preventDefault();
        const section = document.querySelector("#knowledge");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Conhecimentos
    </a>
  </li>
  <li className={styles.item}>
    <a
      href="#talk-to-me"
      onClick={(e) => {
        e.preventDefault();
        const section = document.querySelector("#talk-to-me");
        section?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Fale comigo
    </a>
  </li>
</ul>


          <ul className={styles.socialLinks}>
            <li>
              <Link
                href="https://www.instagram.com/kaahguarino_/"
                target="_blank"
                title="Instagram"
                onMouseEnter={() => setHovered("instagram")}
                onMouseLeave={() => setHovered(null)}
              >
                <InstagramIcon fill={getColor("instagram")} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Kaylane-Guarino"
                target="_blank"
                title="Github"
                onMouseEnter={() => setHovered("github")}
                onMouseLeave={() => setHovered(null)}
              >
                <GitHubIcon fill={getColor("github")} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/kaylane-guarino-84229120a/"
                target="_blank"
                title="LinkedIn"
                onMouseEnter={() => setHovered("linkedin")}
                onMouseLeave={() => setHovered(null)}
              >
                <LinkedinIcon fill={getColor("linkedin")} />
              </Link>
            </li>
          </ul>
          <select
            className={`${styles.select} ${isScrolled ? styles.scrolled : ""}`}
            defaultValue="Menu"
            onChange={(e) => {
              const value = e.target.value;

              if (value === "#") {
                window.location.href = value;
              } else {
                const section = document.querySelector(value);
                section?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <option value="#">Menu</option>
            <option value="#about">Sobre mim</option>
            <option value="#knowledge">Conhecimentos</option>
            <option value="#talk-to-me">Fale comigo</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
