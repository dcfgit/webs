import Head from "next/head";

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TerminosYCondiciones from "@/components/Layouts/TerminosyCondiciones";
import Footer from "@/components/Layouts/components/footerHome";
import ResponsiveNavbar from "@/components/Layouts/components/navbar";



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
   <title>Contacto | Servicio de inversiones | DCF Inversiones</title>
        <meta
          name="description"
          content="Contactá a nuestros asesores financieros en Argentina. Resolvé tus dudas, recibí asesoramiento personalizado y encontrá la mejor estrategia para tus finanzas."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" type="image/png" href="/favicon-dcf.png" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
         <ResponsiveNavbar />
        <TerminosYCondiciones/>
          <Footer/>

        </main>
 
      </div>
    </>
  );
}