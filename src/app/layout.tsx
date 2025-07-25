import { CSSProperties, Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { cssTheme, theme } from "@/constants/theme";

import styles from "./page.module.scss";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kaylane // Portifólio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Suspense fallback={null}>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <div style={cssTheme as CSSProperties} className={styles.root}>
                {children}
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
