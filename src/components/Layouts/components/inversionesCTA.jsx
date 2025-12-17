import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const InversionesSection = styled(Box)(({ theme }) => ({
  position: 'relative', 
  padding: theme.spacing(12, 0),
  color: "#fff",
  overflow: 'hidden', 
  textAlign: 'center',
  height: '500px', 

  '& .inversiones-video-background': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%', 
    minHeight: '100%', 
    width: 'auto',
    height: 'auto',
    transform: 'translate(-50%, -50%)', 
    zIndex: -2,
    objectFit: 'cover', 
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  '& .inversiones-video-overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    
    zIndex: -1, 
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'url(/assets/abrir-cuenta-bg.jpg)', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  },

  [theme.breakpoints.down('md')]: {
    backgroundImage: 'url(/assets/abrir-cuenta-bg.jpg)', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
 
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  maxWidth: '800px',
  margin: '0 auto', 
  textAlign: 'left',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '95%',
  },
}));

const InversionesCTA = () => {
  const theme = useTheme();
    const videoRef = useRef(null);
  
    useEffect(() => {
      const v = videoRef.current;
      if (v) {
        v.play().catch(err => {
          console.warn("Autoplay bloqueado:", err);
        });
      }
    }, []);

  const localVideoPath = '/assets/videos/VideoInversiones.mp4';


  return (
    <InversionesSection>

      <video
       ref={videoRef}
          control="false"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-video-background"
          poster="/assets/inversiones-mobile.jpg" 
        >
        <source src={localVideoPath} type="video/mp4" />
        Tu navegador no soporta el video de fondo.
      </video>

      <div className="hero-video-overlay"></div> 

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ContentBox>
  <Typography 
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              color: "rgba(255, 255, 255, 1)",
              fontSize: {
                xs: "28px",
                sm: "42px", 
              },
              textAlign:"center"
            }}
          >            Inversiones
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, color: 'rgba(255,255,255,0.8)', textAlign:"center"  }}>
            En DCF nos focalizamos en el resultado final, con estrategias de planificación, control y ejecución que respaldan las decisiones de financiamiento e inversión.
          </Typography>
        </ContentBox>
      </Container>
    </InversionesSection>
  );
};

export default InversionesCTA;