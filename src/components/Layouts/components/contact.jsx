import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
import { styled } from '@mui/system';



const ContactSectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 104, 132, 0.15)',
  padding: theme.spacing(8, 0),
  textAlign:"left",
  position: 'relative', 
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/assets/bg-contacto.png)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1, 
    zIndex: -1,
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: "f8f9fa", 
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
  padding: theme.spacing(3),
  minHeight: '250px',
  minWidth: "250px", 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center', 
  textAlign: 'center',
}));

const CardIconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: theme.shape.borderRadius, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: "#fff",
    fontSize: 32,
  },
}));
const LogoImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '50px', 
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'none', 
  },
});

const ContactSection = () => {
  const theme = useTheme();

  const contactOptions = [
    {
      id: 1,
      icon: '/webs//assets/contacto/direccion.png',
      title: 'Dirección',
      details: 'Maipú 728, Bernal\nCP1876, Argentina',
      isButton: false,
      inLink:false
    },
    {
      id: 2,
      icon:'/webs/assets/contacto/telefono.png' ,
      title: 'Teléfono',
      details: '+54 9 11 5463-6957',
      isButton: false,
      inLink:true,
      link:"https://api.whatsapp.com/send?phone=541154636957&text=Buenas%20tardes%2C%20DCF%20Inversiones%2C%20quisiera%20consultar%20por%20un%20asesoramiento."
    },
    {
      id: 3,
      icon: '/webs/assets/contacto/email.png',
      title: 'E-mail',
      details: 'info@dcfinversiones.com.ar',
      isButton: false,
      inLink:true,
      link: "mailto:info@dcfinversiones.com.ar"
    },
    {
      id: 4,
      icon: '/webs/assets/contacto/formulario.png',
      title: 'Formulario',
      buttonText: '→',
      isButton: true, 
      inLink:false
    },
  ];

  return (
    <ContactSectionContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{justifyContent:{xs:"center"}, textAlign:"center"}}>
          <Grid item xs={12} md={5} sx={{justifyContent:{xs:"center"}}}>
            <Box sx={{ pr: { md: 4 } }}> 
              <Typography
                             variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px" }}

              >
                ¡Tu canal directo con DCF!
              </Typography>
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
          >                ¿Querés hablar con nosotros?
              </Typography>
              <Typography variant="body1" sx={{color:"rgba(102, 102, 102, 1)"}}>
                Estamos listos para ayudarte a tomar las mejores decisiones financieras.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={4} sx={{justifyContent:{xs:"center"}}}>
              {contactOptions.map((option) => (
                <Grid item xs={12} sm={6} key={option.id} >
                  <ContactCard>
                    <CardIconWrapper>
                      <LogoImage src={option.icon} />
                    </CardIconWrapper>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold', color:"rgba(102, 102, 102, 1)" }}>
                      {option.title}
                      
                    </Typography>
                    {option.isButton ? (
                      <Button variant="contained" size="large" sx={{ mt: 2, borderRadius: theme.shape.borderRadius, background:"rgba(0, 104, 132, 1)" }}>
                        <a href="/webs/contacto">{option.buttonText}</a>
                        
                      </Button>
                    ) : (
                      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line', color:"rgba(102, 102, 102, 1)", '&:hover': {
    cursor: 'pointer', 
  }    }}> 
                      {option.inLink ? (
                        <>
                          <a href={option.link} target='_blank' >{option.details}</a>
                        </>
                      ):(
                        <>
                        {option.details}
                        </>
                      )}
                        
                      </Typography>
                    )}
                  </ContactCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ContactSectionContainer>
  );
};

export default ContactSection;