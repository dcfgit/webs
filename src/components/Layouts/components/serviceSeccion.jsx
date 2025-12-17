import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

const SectionContainer = styled(Box)(({ theme }) => ({
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

const StyledCard = styled(Card)(({ theme }) => ({
  minHeight: '650px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: "20px",
  background:"rgba(255, 255, 255, 1)",
  transition: 'transform 0.3s ease-in-out',
  width:"100%",
  alignItems:"flex-start",
  maxWidth: "300px",
  boxShadow: " 0 0 20 0 rgba(131, 131, 131, 0.25)",
    '&:hover': {
    transform: 'translateY(-5px)',
  },
    [theme.breakpoints.down('sm')]: {
      maxWidth: "350px", 
    },

}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(3),
}));

const CardIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: "#36708a",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: '#fff',
    fontSize: 32,
  },
}));

const ServiceDescriptionList = styled('ul')(({ theme }) => ({
  listStyle: 'none', 
  padding: 0,
  textAlign: 'left',
  '& li': {
    display: 'flex',
    alignItems: 'flex-start',
    
  },
}));

const ServiceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <AccountBalanceWalletOutlinedIcon />, 
      title: 'Asesoria Financiera ',
      subtitle: 'Iniciá con DCF',
      description: [
        `**SERVICIO 100% GRATUITO** solo con elegirnos como tus asesores en nuestros broker aliados`,
        'Cartera modelo diversificadas según tu perfil de riesgo (conservador, moderado o agresivo).',
        'Actualización periódica y rebalanceos de las carteras de inversión.',
        'Autonomía con soporte: resolvé tus dudas con nuestro equipo de expertos.',
        'Acceso directo a nuestra comunidad de Whatsapp  para recibir información diaria de mercados e ideas de inversión.',
        'Acceso gratuito a la Plataforma DCF con herramientas de analisis financiero'
      ],
      button:'./#cuenta'
    },
    {
      icon: <TrendingUpOutlinedIcon />, 
      title: 'Wealth Management',
      subtitle: 'Gestión profesional',
      description: [
        'Servicio integral para quienes buscan **delegar por completo la gestión de sus inversiones.**',
        'Diseño y seguimiento personalizado de tu portafolio.',
        'Reuniones estratégicas para entender tus objetivos y tolerancia al riesgo.',
        'Optimización y ajustes periódicos para maximizar resultados.',
        'Atención directa y prioritaria vía WhatsApp.',
        'Disponible para carteras desde un monto mínimo (consultanos).',
        'Fee competitivo',
        'Acceso gratuito a la comunidad de Whatsapp y a la Plataforma DCF'
      ],
    },
    {
      icon: <BusinessOutlinedIcon />, 
      title: 'Asesoramiento para pymes',
      subtitle: 'Estrategias a medida',
      description: [
        'Soluciones a medida para empresas que necesitan optimizar sus finanzas con herramientas del mercado de capitales.',
        'Diagnóstico y asesoramiento integral sobre flujo de fondos.',
        'Colocación de excedentes de corto y mediano plazo.',
        'Acceso a financiamiento eficiente para descalces financieros.',
        'Acceso a productos como cheques de pago diferido, Fondos comunes de Inversión, cauciones, y más.',
        'Análisis de costos y tasas más competitivas del mercado.',
      ],
    },
    {
      icon: <AnalyticsOutlinedIcon />,
      title: 'Revision de portfolio',
      subtitle: 'Consultoría puntual',
      description: [
        'Servicio ideal para resolver inquietudes o revisar tu estrategia de inversión sin compromiso mensual.',
        'Pagás solo por la consulta, sin ataduras.',
        'Análisis personalizado de tu portafolio y situación financiera.',
        'Recomendaciones claras según tus objetivos y perfil de riesgo.',
        'Ideal para quienes están comenzando o desean una segunda opinión profesional.',
      ],
    },
  ];

  return (
    <SectionContainer>
      <Container
      id="servicios"
        maxWidth={false}
        sx={{
          maxWidth: '1600px',
          paddingLeft: theme.spacing(4), 
          paddingRight: theme.spacing(4),
          [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          },
        }}
      >
       
        <Typography variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px" }}>Nuestros servicios</Typography>
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
          >          Te acompañamos en cada etapa de tu inversión
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          mb: 4,
          textAlign: 'center',
          gap: isMobile ? theme.spacing(1) : 0 
        }}>
          <Typography variant="body2" sx={{ mx: 0, mb: isMobile ? 1 : 0, color: theme.palette.text.secondary, fontSize:"15px", maxWidth:"1000px", textAlign:{xs:"left", sm:"center"} }}>Somos consultores financieros con una amplia trayectoria, ayudando a nuestros clientes con sus inversiones. Te ofrecemos un <strong>seguimiento personalizado</strong> de tus finanzas adaptado a tus objetivos</Typography>
         
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard
                      sx={
                        index === 0
                          ? {
                              backgroundColor: "#008ecc", 
                              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.55)", 
                              transform: "translateY(-5px)", 
                              transition: "all 0.3s ease",
                            }
                          : {}
                      }
                    >
                <CardContent>
                  <CardHeader>
                    <CardIcon>
                      {service.icon}
                    </CardIcon>
                    <Typography variant="caption" sx={{ mb: 0.5 , background:"rgba(229, 238, 241, 1)", width:"auto", display:"inline-block", padding:"5px 10px", borderRadius:"30px", color:"rgba(0, 104, 132, 1)" }}>
                      {service.subtitle}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={index===0 ?{
                       fontWeight: 'bold', textAlign:"left", color:"#fff"
                    }:{ fontWeight: 'bold', textAlign:"left", color:"rgba(102, 102, 102, 1)" }}>
                      {service.title}
                    </Typography>
                  </CardHeader>

                 <ServiceDescriptionList>
                    {service.description.map((item, i) => (
                      <li key={i}>
                        <Typography variant="body2" sx={index===0 ? {color:"#fff"}:{color:"rgba(102, 102, 102, 1)"}} >
                          {item.split(/(\*\*.*?\*\*)/g).map((part, idx) =>
                            part.startsWith("**") && part.endsWith("**") ? (
                              <strong key={idx}>{part.slice(2, -2)}</strong>
                            ) : (
                              part
                            )
                          )}
                        </Typography>
                      </li>
                    ))}
                  </ServiceDescriptionList>
                  {(service.button) ?(
                    <>
                     <Button variant="outlined" size="large" sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', border:"1px solid #fff", borderRadius:"20px", fontSize:"16px",textTransform:"none", color:"#008ecc", marginTop:"20px", '&:hover': { backgroundColor: 'transparent', color:"#fff" } }}>
                                  <a href={service.button} >Abri tu cuenta</a>
                            
                                </Button>
                    </>
                  ):(
                    <></>
                  )}
                </CardContent>
            
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default ServiceSection;