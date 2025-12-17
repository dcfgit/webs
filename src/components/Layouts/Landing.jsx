import React, { useEffect, useRef } from "react";
import ServiceSection from "./components/serviceSeccion";
import PlatformFeaturesSection from "./components/plataforma";
import AccountOpening from "./components/account";
import AboutExpertsSection from "./components/aboutUs";
import PartnersAndMarketsSection from "./components/partners";
import TestimonialsSection from "./components/testimonios";
import InversionesCTA from "./components/inversionesCTA";
import ContactSection from "./components/contact";
import Footer from "./components/footerHome";
import { Box, Button } from '@mui/material';
import RevealOnScroll from "./hocks/RevealOnScroll";
import ResponsiveNavbar from "./components/navbar";
import Head from "next/head";


const Landing = () => {
  <Head>
        <title>DCF Inversiones | Servicio de inversiones</title>
        <meta
          name="description"
          content="Asesoramiento financiero en Argentina para personas y empresas. Inversiones, planificación patrimonial y estrategias personalizadas para hacer crecer tu dinero con seguridad."
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


      {/* CONTENIDO CENTRAL */}
       <div className="hero-content-wrapper"> 

       <video
       ref={videoRef}
          control="false"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-video-background"
          poster="/webs/assets/videos/VideoHome.jpg" 
        >
          <source
            src="/webs/assets/videos/VideoHome.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el tag de video.
        </video>

        {/* IMAGEN DE SUPERPOSICIÓN CON SOMBREADO */}
        <div className="hero-video-overlay"></div> 

        {/* CONTENIDO DEL HÉROE ORIGINAL */}
        <div className="hero-content">
          <h1>
            Invierte con <span className="highlight">confianza</span><br />
            y potencia tu futuro financiero 
          </h1>
          <p className="texto-opening">
            Transforma tu futuro con nuestras asesorías financieras, estrategias personalizadas y tecnología de vanguardia.
          </p>
          <Button variant="outlined"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)', border:"1px solid #fff", borderRadius:"20px", fontSize:"16px",textTransform:"none", color:"#fff", width:"250px",     margin: "20px auto 0", '&:hover': { backgroundColor: 'transparent' } }}>
      <a href="/#cuenta">Comienza a invertir hoy</a>
          </Button>
        </div>
      </div>

      <Box sx={{ position: 'relative', zIndex: 0 }}> 
       <RevealOnScroll threshold={0.2} delay="0s">
          <ServiceSection />
        </RevealOnScroll>
         <RevealOnScroll threshold={0.2} delay="0s">
          <AboutExpertsSection/>
        </RevealOnScroll>
         <RevealOnScroll threshold={0.2} delay="0s">
          <PartnersAndMarketsSection/>
        </RevealOnScroll>
         <RevealOnScroll threshold={0.2} delay="0s">
            <TestimonialsSection/>
          </RevealOnScroll>
        
          


       <RevealOnScroll threshold={0.2} delay="0s">
           <AccountOpening/>
        </RevealOnScroll>
 
      <PlatformFeaturesSection />
   
     <InversionesCTA/>
     <ContactSection/>
     <Footer/>
      </Box>

      {/* BOTONES FLOTANTES DERECHA */}
      <div className="floating-buttons">
        <button className="cta-btn" > <a href="/#cuenta">¡Abrí tu cuenta ahora!</a></button>
        <button className="icon-btn"><a href="https://api.whatsapp.com/send?phone=541154636957&text=Buenas%20tardes%2C%20DCF%20Inversiones%2C%20quisiera%20consultar%20por%20un%20asesoramiento." target="_blank">
        <img src="/webs/assets/iconos/whatsapp.png" alt="" style={{width:"30px", height:"30px"}}/>
        </a> </button>
        <button className="icon-btn"><a href="mailto:info@dcfinversiones.com.ar" target="_blanck">
          <img src="/webs/assets/iconos/email.png" alt="" style={{width:"30px", height:"30px"}}/>
          </a></button>
      </div>
    </div>
  );
};

export default Landing;