import { Button, Input } from "antd";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import styles from "./talkToMe.module.scss";

const { TextArea } = Input;

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

export function talkToMe() {
  return (
    <section className={styles.section} id="talk-to-me">
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>Eu estou <br/> esperando <br/> <span className={`${blackOps.className} ${styles.title}`}>por você</span>.</h1>
          <p>Preencha o formulário ou me envie <br /> uma mensagem de texto no whatsapp.</p>
          <Link href="https://wa.me/5511999677902?text=Olá%2C%20eu%20vim%20pelo%20portifólio%21" target="_blank" className={styles.button}>Whatsapp</Link>
        </div>
        <form>
          <Input className={styles.input} placeholder="Nome pessoal ou empresa" />
          <Input className={styles.input} placeholder="Email" />
          <Input className={styles.input} placeholder="Assunto" />
          <TextArea rows={6} className={styles.input} placeholder="Me fale sobre o seu projeto ou vaga..." />
          <Button className={styles.send}>Enviar</Button>
        </form>
      </div>
    </section>
  );
};
