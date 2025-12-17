import React, { useEffect, useRef } from "react";


import Footer from "./components/footerHome";
import { Box } from '@mui/material'; // Import Box for the main content wrapper
import RevealOnScroll from "./hocks/RevealOnScroll";
import ResponsiveNavbar from "./components/navbar";
import Head from "next/head";
import ContactPage from './components/contactPage'

const Contacto = () => {
  <Head>
        <title>Contacto | Servicio de inversiones | DCF Inversiones</title>
        <meta
          name="description"
          content="Contactá a nuestros asesores financieros en Argentina. Resolvé tus dudas, recibí asesoramiento personalizado y encontrá la mejor estrategia para tus finanzas."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
      </Head>
  const videoRef = useRef(null);
 
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(err => {
        console.warn("Autoplay bloqueado:", err);
      });
    }
  }, []);
  return (
    <div className="hero-container">
      {/* NAV - Use the new ResponsiveNavbar component */}
      <ResponsiveNavbar />

      <Box sx={{ position: 'relative', zIndex: 0 }}> 
          
        <ContactPage/>
  
     <Footer/>
      </Box>

      {/* BOTONES FLOTANTES DERECHA */}
       <div className="floating-buttons">
        <button className="cta-btn" > <a href="/#cuenta">¡Abrí tu cuenta ahora!</a></button>
        <button className="icon-btn"><a href="https://api.whatsapp.com/send?phone=541154636957&text=Buenas%20tardes%2C%20DCF%20Inversiones%2C%20quisiera%20consultar%20por%20un%20asesoramiento." target="_blank">
        <img src="/assets/iconos/whatsapp.png" alt="" style={{width:"30px", height:"30px"}}/>
        </a> </button>
        <button className="icon-btn"><a href="mailto:info@dcfinversiones.com.ar" target="_blanck">
          <img src="/assets/iconos/email.png" alt="" style={{width:"30px", height:"30px"}}/>
          </a></button>
      </div>
    </div>
  );
};

export default Contacto;