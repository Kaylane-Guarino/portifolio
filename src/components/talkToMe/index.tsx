'use client';
import React, { useState } from "react";
import { Button, Input, message, Spin } from "antd";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import styles from "./talkToMe.module.scss";
import { sendEmail } from "@/service/api";

const { TextArea } = Input;

const blackOps = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function talkToMe() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: FormData) => {
    setForm(e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await sendEmail(form);
      messageApi.success(res.message || "Email enviado com sucesso!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      messageApi.error(err?.response?.data?.message || "Desculpa, estou com problemas para enviar o email. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.section} id="talk-to-me">
      {contextHolder}
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>
            Eu estou <br /> esperando <br />{" "}
            <span className={`${blackOps.className} ${styles.title}`}>
              por você
            </span>
            .
          </h1>
          <p>
            Preencha o formulário ou me envie <br /> uma mensagem de texto no
            whatsapp.
          </p>
          <Link
            href="https://wa.me/5511999677902?text=Olá%2C%20eu%20vim%20pelo%20portifólio%21"
            target="_blank"
            className={styles.button}
          >
            Whatsapp
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            className={styles.input}
            placeholder="Nome pessoal ou empresa"
            name="name"
            value={form.name}
            onChange={(e) => handleChange({ ...form, name: e.target.value })}
            required
          />
          <Input
            className={styles.input}
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={(e) => handleChange({ ...form, email: e.target.value })}
            required
          />
          <Input
            className={styles.input}
            placeholder="Assunto"
            name="subject"
            value={form.subject}
            onChange={(e) => handleChange({ ...form, subject: e.target.value })}
            required
          />
          <TextArea
            rows={6}
            className={styles.input}
            placeholder="Me fale sobre o seu projeto ou vaga..."
            name="message"
            value={form.message}
            onChange={(e) => handleChange({ ...form, message: e.target.value })}
            required
          />
          <Button className={styles.send} htmlType="submit">{loading ? <Spin size="small" /> : "Enviar"}</Button>
        </form>
      </div>
    </section>
  );
}