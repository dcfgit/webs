import React from 'react';
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import { display, maxHeight, minWidth, styled, textAlign } from '@mui/system';

const PartnersSectionContainer = styled(Box)(({ theme }) => ({
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
   [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
  },

}));

const LogoImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '60px', 
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: "40px", 
    marginTop: theme.spacing(4),
    display:'block',
    minWidth:"150px",
    objectFit:"cover"
  },
}));

const PartnersAndMarketsSection = () => {
  const theme = useTheme();

  const partners = [
    { name: 'Invertironline', logo: '/assets/parners/invertir-online.png' }, 
    { name: 'Balanz', logo: '/assets/parners/balanz.png' },
    { name: 'BNY Mellon Pershing', logo: '/assets/parners/bnymellon.png' },
    { name: 'Criteria', logo: '/assets/parners/critera.png' },
    { name: 'StoneX', logo: '/assets/parners/stonex.png' }
    
  ];
  const partners2 = [
    { name: 'Allaria', logo: '/assets/parners/logos-color/allaria-color.png' },
   { name: 'Cocos', logo: '/assets/parners/logos-color/cocos-color.png' },
   { name: 'IEB+', logo: '/assets/parners/logos-color/iebmas-color.png' },
   { name: 'Inviu', logo: '/assets/parners/logos-color/inviu-color.png' },
   { name: 'PPI', logo: '/assets/parners/logos-color/ppi.png' },
    
  ];
  const markets = [
    { name: 'BYMA', logo: '/assets/parners/byma.png' },
    { name: 'CNV', logo: '/assets/parners/cnv.png' },
    { name: 'Matba Rofex', logo: '/assets/parners/matbaRofex.png' },
  ];

  return (
    <PartnersSectionContainer>
      <Container maxWidth="lg">
        <Typography
          variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px" }}
        >
          Nuestros aliados
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
          >          Partners que potencian tu inversión
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 8 }}>
          {partners.map((partner) => (
            <Grid item xs={6} sm={4} md={2} key={partner.name}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:'30px', sm:"100px"} }}>
                <LogoImage src={partner.logo} alt={partner.name} />
              </Box>
            </Grid>
          ))}
            {partners2.map((partner) => (
            <Grid item xs={6} sm={4} md={2} key={partner.name}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:'30px', sm:"100px"}, width:{sm: "70%", xs:"100%" }}}>
                <LogoImage src={partner.logo} alt={partner.name} />
              </Box>
            </Grid>
          ))}
        </Grid>

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
          >          Mercados
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {markets.map((market) => (
            <Grid item xs={6} sm={4} md={2} key={market.name}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:'30px', sm:"100px"} }}>
                <LogoImage src={market.logo} alt={market.name} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PartnersSectionContainer>
  );
};

export default PartnersAndMarketsSection;