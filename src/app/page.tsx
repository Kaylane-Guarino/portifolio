"use client";
import React, { JSX } from "react";
import styles from "./page.module.scss";
import { Header } from "@/components/header";
import { section } from "@/constants/section";
import { COMPONENTS } from "@/components";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {section.map(({ key, props }, idx) => {
          const CurrentComponent = COMPONENTS[key] as (
            prop: typeof props
          ) => JSX.Element;
          return (
            <CurrentComponent key={idx} {...(props as Record<string, unknown>)} />
          );
        })}
      </main>
      <Footer/>
    </div>
  );
}
