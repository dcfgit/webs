import Head from "next/head";

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Landing from "@/components/Layouts/Landing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
         <title>DCF Inversiones | Servicio de inversiones</title>
        <meta
          name="description"
          content="Asesoramiento financiero en Argentina para personas y empresas. Inversiones, planificación patrimonial y estrategias personalizadas para hacer crecer tu dinero con seguridad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-dcf.png" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
        <Landing/>

        </main>
 
      </div>
    </>
  );
}
