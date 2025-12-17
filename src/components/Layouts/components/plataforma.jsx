import React from 'react';
import { Container, Typography, Box, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import { fontSize, padding, styled } from '@mui/system';
import {PopupNewsletter} from '../popup';

const FeatureSectionContainer = styled(Box)(({ theme }) => ({
   backgroundColor: 'rgba(248, 249, 250, 0.7)', 
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow:"hidden",
  opacity:"0.9",
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/webs/assets/Background.png)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1, 
    zIndex: -1, 
  },

}));

const FeatureRow = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  marginBottom: theme.spacing(8),
  '&:last-child': {
    marginBottom: 0, 
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  maxHeight: "400px",
  overflow: "hidden", 
  [theme.breakpoints.down('sm')]: {
      padding: "0px"
    },
  '& img': {
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: "600px", 
    [theme.breakpoints.down('sm')]: {
      maxWidth: "350px"
    },
  },
}));

const TextContent = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(2),
  maxWidth: "500px",
  [theme.breakpoints.down('md')]: {
    textAlign: 'center', 
  },
}));

const PlatformFeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      id: 1,
      title: 'Portfolio',
      description:
        'Construye y personaliza tu cartera de inversión en minutos. Selecciona activos, asigna pesos y visualiza su rendimiento en tiempo real. Monitorea diversificación, ganancias y métricas clave para tomar decisiones informadas, todo desde un panel intuitivo y seguro.',
      buttonText: 'Ingresar a Plataforma DCF',
      image: '/webs/assets/app-landing.png', 
      imageAlt: 'Captura de pantalla de la interfaz de portfolio',
      imageLeft: true, 
    },
    {
      id: 2,
      title: 'Carteras recomendadas',
      description:
        'Descubre carteras prearmadas según diferentes perfiles de riesgo y objetivos de inversión. Explora opciones "Conservador", "Moderado" o "Agresivo" con sus descripciones, rentabilidad esperada y métricas clave. Actualizamos de manera continua las propuestas para que elijas la mejor se adapte a tus necesidades.',
      image: '/webs/assets/carteras.png', 
      imageAlt: 'Captura de pantalla de carteras recomendadas',
      imageLeft: false,
    },


    {
      id: 1,
      title: 'Watchlist',
      description:
        'Crea y personaliza listas con tus activos favoritos para seguirlos de cerca en un solo lugar. Visualiza cotizaciones, variaciones y gráficos de rendimiento a distintos plazos, y recibe alertas al activarlas. Con un clic, accede a datos fundamentales, métricas clave, noticias y proyecciones de precio para profundizar en cada ticker. Mantén tu cartera informada y toma decisiones rápidas sin salir de tu dashboard.',
      buttonText: 'Ingresar a Plataforma DCF',
      image: '/webs/assets/Watchlist.png', 
      imageAlt: 'Captura de pantalla de la interfaz de portfolio',
      imageLeft: true, 
    },
    {
      id: 2,
      title: 'Calculdora de bonos',
      description:
        'Consulta los datos clave de cada bono (emisor, ley, vencimiento, cupón, frecuencia y moneda) y calcula fácilmente la TIR a partir del precio (o el precio a partir de la TIR). Obtén al instante intereses corridos, valor total de la operación, duración y convexidad. Además, visualiza el cronograma completo de cupones y amortizaciones y descarga la tabla de cashflows con un solo clic.', 
    image: '/webs/assets/calculadora-de-bonos.png', 
      imageAlt: 'Captura de pantalla de carteras recomendadas',
      imageLeft: false,
    },


    {
      id: 1,
      title: 'Calculadora de Estrategia de Opciones',
      description:
        'Arma fácilmente estructuras de opciones (calls, puts, strikes y vencimientos) y calcula al instante el costo total, P/L actual, ganancia máxima, pérdida máxima y Greeks (Delta, Theta, Gamma). Visualiza un gráfico interactivo del payoff y analiza distintos escenarios de precio con detalles de P/L teórico. Guarda tus estrategias para consultarlas, compararlas y ajustarlas cuando lo necesites.',
      buttonText: '¡Quiero conocer Plataforma DCF!',
      image: '/webs/assets/opciones.png', 
      imageAlt: 'Captura de pantalla de la interfaz de portfolio',
      imageLeft: true, 
    },
    // {
    //   id: 2,
    //   title: 'PYMEs',
    //   description:
    //     'Descubre carteras prearmadas según diferentes perfiles de riesgo y objetivos de inversión. Explora opciones "Conservador", "Moderado" o "Agresivo" con sus descripciones, rentabilidad esperada y métricas clave. Actualizamos de manera continua las propuestas para que elijas la mejor se adapte a tus necesidades.',
    //   image: '/webs/assets/Pymes.png', 
    //   imageAlt: 'Captura de pantalla de carteras recomendadas',
    //   imageLeft: false, // Image on the right, text on the left
    // }
  ];

  return (
    <FeatureSectionContainer>
      <Container maxWidth="lg">
        <Typography variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px" }}>Todo en un solo lugar</Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              fontWeight: 'bold',
              color: "rgba(102, 102, 102, 1)",
              fontSize: {
                xs: "28px",
                sm: "42px", 
              },
            }}
          >
          ¡Conocé nuestra nueva herramienta, <br /> <span sx={{color:"#295e78", fontSize:"42px", fontWeight: 'bold'}}>Plataforma DCF!</span>
        </Typography>

        {features.map((feature) => (
          <FeatureRow
            container
            spacing={2}
            key={feature.id}
            direction={
              isMobile
                ? 'column' 
                : feature.imageLeft
                ? 'row' 
                : 'row-reverse' 
            }
          >
            <Grid item xs={12} md={6}>
              <ImageContainer>
                <img src={feature.image} alt={feature.imageAlt} />
              </ImageContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextContent>
                <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 'bold', color:"rgba(102, 102, 102, 1)", fontSize:"24px" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="rgba(102, 102, 102, 1)" sx={{ mb: 3 , fontSize:"16px", textAlign:{xs:"left", sm:"center"}}}>
                  {feature.description}
                </Typography>
                {feature.buttonText && (
                  <Button variant="contained"  size="large" sx={{background: 'linear-gradient(to right, rgba(59, 121, 149, 1), rgba(43, 101, 128, 1), rgba(34, 82, 108, 1))',
        color: 'white', padding:"10px 30px", borderRadius:"100px", fontSize:"16px", fontWeight:"700"}}>
                    <PopupNewsletter/>
                  </Button>
                )}
              </TextContent>
            </Grid>
          </FeatureRow>
        ))}
      </Container>
    </FeatureSectionContainer>
  );
};

export default PlatformFeaturesSection;