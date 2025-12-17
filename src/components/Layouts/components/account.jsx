import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { styled, width } from '@mui/system';

const AccountOpeningSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 0),
  color: "#fff", 
  overflow: 'hidden', 
  textAlign: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/assets/cuenta.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1, 
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  maxWidth: '800px',
  margin: '0 auto', 
  textAlign:"left",
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '100%',
    padding:"20px"
  },
}));

const StepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  textAlign: 'left',
  '&:last-child': {
    marginBottom: 0,
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: '50%',
backgroundColor: " #0077b6",
  color: "#fff",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
   margin:"8px auto"
  },
}));

const StepButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1), 
  marginTop: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', 
    width: '100%',
    '& > button': {
      width: '100%', 
    },
  },
}));
const LogoImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '30px', 
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'none',
  },
});

const AccountOpening = () => {
  const theme = useTheme();

  return (
    <AccountOpeningSection>
      <Container maxWidth="lg" id="cuenta">
        <ContentBox>
          <Typography variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px", textAlign:"left" }}>
            Tu camino a la inversión fácil y rápida
          </Typography>
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
            }}
          >            Abrí tu cuenta de inversión en simples pasos 100% gratuita
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, color: 'rgba(255,255,255,0.8)', fontSize:"16px", padding:"0px" }}>
            Convertite en inversor en solo unos minutos. Seguí los pasos online y comenzá a operar
            tus ahorros sin necesidad de contactarte con nosotros.
          </Typography>

          
          <StepContainer>
            <StepNumber>1</StepNumber>
            <Box sx={{width:{xs:"100%", sm:"100%"}}}>
              <Typography variant="subtitle1" sx={{color: 'white', mb: 1,fontSize:"16px"  }}>
                Elegí con qué ALyC querés operar:
              </Typography>
              <StepButtonGroup>
                <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:{sm:"150px", xs:"100%"},borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                  <a href="https://www.iebmas.com.ar/" target='_blank'><LogoImage src="/assets/parners/iebmas.png" alt="imb" /></a>
                  
                  
                </Button>
                <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px", borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://www.balanz.com/abrir-cuenta-2.aspx?reference=info@dcfbusiness.com" target='_blank'>
                 <LogoImage src="/assets/parners/balanz-logo.png" alt="balanz" />
                 </a>
                </Button>
                 <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px",borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://micuenta.invertironline.com/registrarme?codigoAsesor=DCF_IOL" target='_blank'> 
                 <LogoImage src="/assets/parners/invertir-online-logo.png" alt="Invertir Online" />
                 </a>
                </Button>
              </StepButtonGroup>
                <StepButtonGroup>
                <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px",borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                  <a href="https://micuenta.criteria.com.ar/#!/registration/email" target='_blank'>
                  <LogoImage src="/assets/parners/critera-logo.png" alt="Criteria" />
                  </a>
                </Button>
                <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px",borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://seleccion-cuenta.allaria.com.ar/" target='_blank'> 
                 <LogoImage src="/assets/parners/allaria-logo.png" alt="Allaria" />
                 </a>
                </Button>
                 <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px",borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://inviu.page.link/EeQf" target='_blank'> 
                 <LogoImage src="/assets/parners/inviu-logo.png" alt="inviu" />
                 </a>
                </Button>
                   <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px", borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://cuenta.portfoliopersonal.com/abrirCuenta?productor=TFE6NVFpZF9hW1E2RHg1QD82QFFpRUNGNltRO0ZDOjU6NDJRaTcyPUQ2W1E0NDZDMlFpNzI9RDZO" target='_blank'> 
                 <LogoImage src="/assets/parners/ppi-logo.png" alt="PPI" />
                 </a>
                </Button>
                <Button variant="contained"  sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)',minWidth:"150px", borderRadius:"20px", fontSize:"16px",textTransform:"none", '&:hover': { backgroundColor: 'transparent' } }}>
                 <a href="https://app.cocos.capital/altas?_gl=1*ykae3i*_gcl_aw*R0NMLjE3NTYzMDEzODYuQ2p3S0NBancyYnJGQmhCT0Vpd0FWSlg1R0RZZ1lUVExkUUxaU3UwU0dfc0ZYNmNLSWVDanlKb3ZVYjhCSUZWVDdpSVd1SFl3YWpUU3Fob0NuS1FRQXZEX0J3RQ..*_gcl_au*MTk0MDc0MTcxMi4xNzU2MzAxMzg2*_ga*MjA4NDEzOTU5MC4xNzM2MDA5ODQ2*_ga_GD4EVY0S82*czE3NTYzMDEzODUkbzIkZzAkdDE3NTYzMDEzODUkajYwJGwwJGgw" target='_blank'> 
                 <LogoImage src="/assets/parners/cocoscapital.png" alt="cocos capital" />
                 </a>
                </Button>
              </StepButtonGroup>
            </Box>
          </StepContainer>

      
          <StepContainer>
            <StepNumber>2</StepNumber>
            <Box>
              <Typography variant="subtitle1" sx={{ color: 'white', mb: 1, fontSize:"16px"  }}>
                Completá el proceso de alta 100% online. Una vez que tu cuenta esté activa, <br />
                estará lista para invertir.
              </Typography>
            </Box>
          </StepContainer>

          <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'left' }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.8)', fontSize:"16px"  }}>
              Si ya contás con una cuenta habilitada en alguna de esas alycs simplemente ponete en contacto con nosotros para acceder a nuestro asesoramiento personalizado. Hacé clic en el botón a continuación para completar el formulario de solicitud:
            </Typography>
            <Button variant="outlined" size="large" sx={{ backgroundColor: 'rgba(132, 132, 132, 0.2)', border:"1px solid #fff", borderRadius:"20px", fontSize:"16px",textTransform:"none", color:"#fff", '&:hover': { backgroundColor: 'transparent' } }}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfE4i3RjdBq1CKQ5XxiGVNF9X5iqdNGY4v-ja1kIisXypkvMg/viewform" target='_blank'>Solicitar asesoramiento</a>
        
            </Button>
          </Box>
        </ContentBox>
      </Container>
    </AccountOpeningSection>
  );
};

export default AccountOpening;