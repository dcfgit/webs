import React from 'react';
import { Container, Typography, Box, Divider, Link, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { PopupNewsletterFooter } from '../popup';

const FooterSection = styled(Box)(({ theme }) => ({
  color: "#fff", 
  padding: theme.spacing(6, 0),
  textAlign: 'center',
  backgroundImage: 'url(/webs/assets/Background-footer.jpg)',  
  backgroundSize:"cover"
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  mb: "20px",
}));

const SocialImage = styled('img')({
  width: 48, 
  height: 48, 
  borderRadius: '8px', 
  objectFit: 'cover', 
  transition: 'transform 0.2s ease-in-out', 
  '&:hover': {
    transform: 'scale(1.05)', 
  },
});

const FooterNavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  mb: theme.spacing(3),
  marginTop:"20px", 
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', 
    gap: theme.spacing(1),
  },
}));

const Footer = () => {
  const theme = useTheme();

  const logoImageUrl = '/webs/assets/logo-blanco.webp'; 
  const instagramImageUrl = '/webs/assets/contacto/instagram.png'; 
  const linkedinImageUrl = '/webs/assets/contacto/linkedln.png'; 
  // ---

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <img src={logoImageUrl} alt="Company Logo" style={{ height: '100px', maxWidth: '100%' }} /> 
        </Box>



        <SocialIconsContainer>
          <IconButton
            sx={{
              padding: 0, 
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            aria-label="Instagram"
            href="https://www.instagram.com/dcf.inversiones/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialImage src={instagramImageUrl} alt="Instagram" />
          </IconButton>
          <IconButton
            sx={{
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/dcfinversiones" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialImage src={linkedinImageUrl} alt="LinkedIn" />
          </IconButton>
        </SocialIconsContainer>
        <Typography variant="body2" sx={{padding:"20px 0 0 0"}}>Matricula CNV Nro: 2475</Typography>

        <FooterNavLinks>
          <Link href="/" color="inherit" underline="none" sx={{  fontSize:"16px",fontWeight:"700", '&:hover': { textDecoration: 'underline' } }}>
            <Typography variant="body2"> Inicio</Typography>
          </Link>
          <Link href="./contacto" color="inherit" underline="none"  sx={{ fontSize:"16px",fontWeight:"700", '&:hover': { textDecoration: 'underline' } }}>
            <Typography variant="body2">Contacto</Typography>
          </Link>
          <Link href="/#cuenta" color="inherit" underline="none"  sx={{ fontSize:"16px",fontWeight:"700", '&:hover': { textDecoration: 'underline' } }}>
            <Typography variant="body2">Abri tu Cuenta</Typography>
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{  fontSize:"16px",fontWeight:"700",  '&:hover': { textDecoration: 'underline' } }}>
              <PopupNewsletterFooter/>
            
          </Link>
            <Link href="./terminos-y-condiciones" color="inherit" underline="none" sx={{  fontSize:"16px",fontWeight:"700",  '&:hover': { textDecoration: 'underline' } }}>
              <Typography variant="body2">Terminos y Condiciones</Typography>
     
          </Link>
        </FooterNavLinks>

        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', marginTop:"25px" }}>
          Copyright ©2025 DCF. Diseñado por Duwoh Developers
        </Typography>
      </Container>
    </FooterSection>
  );
};

export default Footer;