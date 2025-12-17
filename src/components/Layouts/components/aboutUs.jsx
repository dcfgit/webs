import React from 'react';
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import { height, maxWidth, padding, styled, textAlign, width } from '@mui/system';

const AboutSectionContainer = styled(Box)(({ theme }) => ({
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
    backgroundImage: 'url(/assets/Background.png)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1, 
    zIndex: -1, 
  },

}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, 
  width: '100%', 
   maxWidth: "500px",
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 300, 
    marginTop: theme.spacing(4),
    width: 300,
    overflow: "hidden",
    textAlign: "center",
    marginBottom: '30px'
  },
}));

const TextContentWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'left', 
  padding: theme.spacing(2), 
  maxWidth: "600px",

}));


const AboutExpertsSection = () => {
  const theme = useTheme();

  return (
    <AboutSectionContainer>
      <Container maxWidth="lg" id="nosotros"> 
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={4}>
           <Typography
                variant="h4"
                color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px", textAlign:"left" }}
              >
                ¿Quiénes somos?
              </Typography>
            <Typography variant="h2"
                         component="h2"
                         sx={{
                           mb: 6,
                           fontWeight: 'bold',
                           color: "rgba(102, 102, 102, 1)",
                           fontSize: {
                             xs: "28px",
                             sm: "42px", 
                           },
                         }}>Los expertos detrás de cada asesoramiento</Typography>
            <Typography variant="body1" sx={{color:"rgba(102, 102, 102, 1)", padding:"0 0 40px 0", textAlign:{xs:"left", sm:"center"}}}>En DCF Inversiones creemos que las decisiones financieras se toman mejor con información clara, experiencia comprobada y un servicio que realmente entiende a las personas y a las empresas.
Nuestro equipo está conformado por profesionales que combinan formación académica de primer nivel con años de trayectoria en banca, finanzas y gestión empresarial.
<br /><br />
Daniel y Fernando aportan experiencia, profesionalismo y un compromiso total con cada proyecto. Juntos construyen relaciones de largo plazo con sus clientes, ofreciendo asesoramiento financiero integral, claro y alineado con los objetivos de cada persona o empresa.</Typography>
</Grid>
          <Grid item xs={12} md={4}>
               
            <TextContentWrapper>
          
               <Typography
                         variant="h3"
                         component="h3"
                         sx={{
                            mb: {sm:6, xs:1},
                           fontWeight: 'bold',
                           color: "rgba(102, 102, 102, 1)",
                           fontSize: {
                             xs: "20px",
                             sm: "28px", 
                           },
                         }}
                       >
                Daniel Matias Zivkovich
              </Typography>

              <ImagePlaceholder  sx={{display:{xs:"block", sm:"none"}, padding:"0 0 20px 0"}}>
              <img src="/assets/nosotros/Daniel-Matias-Zivkovich.jpeg" alt="Experts behind the advice" style={{ maxWidth: '80%', height: 'auto', borderRadius: theme.shape.borderRadius}} />
            </ImagePlaceholder>
              
              <Typography variant="body1" sx={{color:"rgba(102, 102, 102, 1)", padding:"0 10px"}}>
                Con una mirada estratégica y una gran capacidad de resolución, Daniel es un profesional que se involucra al 100% con cada cliente. Apasionado por el mercado de capitales, se destaca por anticiparse a los desafíos y brindar soluciones concretas, siempre priorizando los intereses de quienes confían en él.
                         
                         <ul className='lista-nosotros'>
                          <li>Contador Público y Magíster en Finanzas</li>
                          <li>Matriculado en CNV</li>
                          <li>Certificado en Machine Learning y Product Owner</li>
                          <li> Amplia trayectoria en el sector financiero y la industria bancaria</li>
                         </ul>
                         
                  Reconocido por su dinamismo, conocimiento profundo del mercado y compromiso absoluto con los clientes
              </Typography>
            </TextContentWrapper>
          </Grid>

          <Grid item xs={12} md={4} sx={{ order: { xs: 2, md: 1 }, display:{xs:"none", sm:"block"} }}>
            <ImagePlaceholder>
              <img src="/assets/nosotros/Daniel-Matias-Zivkovich.jpeg" alt="Experts behind the advice" style={{ maxWidth: '80%', height: 'auto', borderRadius: theme.shape.borderRadius}} />
            </ImagePlaceholder>
          </Grid>


          
          <Grid item xs={12} md={4}  sx={{ order: { xs: 2, md: 1 }, display:{xs:"none", sm:"block"} }}>
            <ImagePlaceholder>
              <img src="/assets/nosotros/Fernando-Lopez-Baio.jpeg" alt="Experts behind the advice" style={{ maxWidth: '80%', height: 'auto', borderRadius: theme.shape.borderRadius}} />
            </ImagePlaceholder>
          </Grid >

                    <Grid item xs={12} md={4}  sx={{ order: { xs: 1, md: 2 } }}
>
               
            <TextContentWrapper>
          
               <Typography
                         variant="h3"
                         component="h3"
                         sx={{
                           mb: {sm:6, xs:1},
                           fontWeight: 'bold',
                           color: "rgba(102, 102, 102, 1)",
                           fontSize: {
                             xs: "20px",
                             sm: "28px", 
                           },
                         }}
                       >
                Fernando Lopez Baio
              </Typography>
              <ImagePlaceholder sx={{display:{xs:"block", sm:"none"}, padding:"0 0 20px 0"}}>
              <img src="/assets/nosotros/Fernando-Lopez-Baio.jpeg" alt="Experts behind the advice" style={{ maxWidth: '80%', height: 'auto', borderRadius: theme.shape.borderRadius}} />
            </ImagePlaceholder>
              <Typography variant="body1" sx={{color:"rgba(102, 102, 102, 1)", padding:"0 10px"}}>
                Fernando combina un enfoque meticuloso con una gran empatía hacia cada cliente. Su honestidad y transparencia transmiten confianza, mientras que su perfil analítico y cuantitativo asegura decisiones respaldadas por datos. Además, su experiencia en empresas PyME le otorga una visión práctica de las verdaderas necesidades del negocio y de las personas.
                         
                         <ul className='lista-nosotros'>
                          <li>Licenciado en Administración de Empresas y Magíster en Finanzas</li>
                          <li>Diplomatura en Finanzas Cuantitativas y Python</li>
                          <li>Experiencia en riesgos de mercado, banca y sector financiero</li>
                          <li> Director Financiero y Administrativo en PyMEs</li>
                         </ul>
                         
Reconocido por su claridad, transparencia y capacidad para simplificar la complejidad financiera
              </Typography>
            </TextContentWrapper>
          </Grid>

          
        </Grid>
      </Container>
    </AboutSectionContainer>
  );
};

export default AboutExpertsSection;