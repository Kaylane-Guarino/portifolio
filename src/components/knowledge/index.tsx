import React, { JSX } from "react";
import styles from "./knowledge.module.scss";

type IconProps = {
  component: JSX.Element;
  name: string;
  color: string;
  url: string;
};

type KnowledgeProps = {
  workIcons: IconProps[];
  toolIcons: IconProps[];
};

export function Knowledge({ workIcons, toolIcons }: KnowledgeProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    const element = e.currentTarget;
    element.classList.add(styles.spin);

    setTimeout(() => {
      element.classList.remove(styles.spin);
      window.open(url, "_blank");
    }, 1500);
  };

  return (
    <section className={styles.section} id="knowledge">
      <div className={styles.container}>
        <h1>Tecnologias que trabalho</h1>

        <div className={styles.icons}>
          {workIcons?.map(({ component, name, color, url }, index) => (
            <div
              key={index}
              className={styles.icon}
              title={name}
              onClick={(e) => handleClick(e, url)}
              style={{ "--icon-color": color } as React.CSSProperties}
            >
              {component}
            </div>
          ))}
        </div>

        <h1>Ferramentas que trabalho</h1>

        <div className={styles.icons}>
          {toolIcons.map(({ component, name, color, url }, index) => (
            <div
              key={index}
              className={styles.icon}
              title={name}
              onClick={(e) => handleClick(e, url)}
              style={{ "--icon-color": color } as React.CSSProperties}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
