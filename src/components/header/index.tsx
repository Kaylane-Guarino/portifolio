'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Black_Ops_One } from 'next/font/google';
import InstagramIcon from "@/icons/intagram";
import GitHubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";
import styles from "./header.module.scss";

const blackOps = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
});

export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const getColor = (id: string) => {
    if (hovered === id) {
      if (id === "instagram") return "#b00262";
      if (id === "github") return "#ffffff";
      if (id === "linkedin") return "#0254a1";
    }
    return "#6ed309";
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <nav>
          <Link href="/" className={`${blackOps.className} ${styles.logo}`}>
            {"<KGS />"}
          </Link>
          <ul>
            <li className={styles.item}>
              <Link id="aboutNav" href="#about">
                Sobre mim
              </Link>
            </li>
            <li className={styles.item}>
              <Link id="projectsNav" href="#projects">
                Projetos
              </Link>
            </li>
            <li className={styles.item}>
              <Link id="knowledgeNav" href="#knowledge">
                Conhecimentos
              </Link>
            </li>
            <li className={styles.item}>
              <Link id="contactNav" href="#contact">
                Fale comigo
              </Link>
            </li>
          </ul>

          <ul className={styles.socialLinks}>
            <li>
              <Link
                href="https://instagram.com/lucyanovidio"
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
                href="https://github.com/lucyanovidio"
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
                href="https://linkedin.com/in/lucyanovidio"
                target="_blank"
                title="LinkedIn"
                onMouseEnter={() => setHovered("linkedin")}
                onMouseLeave={() => setHovered(null)}
              >
                <LinkedinIcon fill={getColor("linkedin")} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
