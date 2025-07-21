import type { ComponentProps } from "react";

import { COMPONENTS } from "../components";

type ComponentKey = keyof typeof COMPONENTS;

type ComponentMap = {
  [K in ComponentKey]: {
    key: K;
    props: ComponentProps<(typeof COMPONENTS)[K]>;
  };
};

export type Component = ComponentMap[ComponentKey];

export const layout = {
  footer: {
    // social: [
    //   {
    //     Icon: FaInstagram,
    //     link: "https://www.instagram.com/palmeiras",
    //   },
    //   {
    //     Icon: FaFacebookSquare,
    //     link: "https://www.facebook.com/palmeiras",
    //   },
    //   {
    //     Icon: FaYoutube,
    //     link: "https://www.youtube.com/palmeiras",
    //   },
    // ],
    // partners: [
    //   {
    //     name: "Banco Central do Brasil",
    //     image: "/partners/bc.svg",
    //     link: {
    //       href: "https://www.bcb.gov.br/meubc/encontreinstituicao",
    //       label: "Empresa Associada",
    //     }
    //   },
    //   {
    //     name: "ABAC",
    //     image: "/partners/abac.svg",
    //     link: {
    //       href: "https://www.abac.org.br/",
    //       label: "Confira nossa autorização do BACEN >",
    //     }
    //   },
    // ],
  },
  // whatsapp: "https://api.whatsapp.com/send?phone=41991099774",
};
