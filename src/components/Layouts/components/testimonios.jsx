import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar, Rating, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialsSectionContainer = styled(Box)(({ theme }) => ({
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

const TestimonialCard = styled(Card)(({ theme }) => ({
  minHeight: '320px', 
  display: 'flex',
  maxWidth:"350px",
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
  padding: theme.spacing(3),
  textAlign: 'left',
  borderRadius:"30px"
}));

const AuthorInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
}));

const TestimonialsSection = () => {
  const theme = useTheme();

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Desde que comencé a trabajar con el equipo de DCF, mi cartera ha crecido de manera constante. Su enfoque personalizado y atención al detalle me han permitido tomar decisiones más informadas. Recomiendo ampliamente sus servicios de asesoramiento financiero.",
      author: 'Carla Rodríguez',
      role: 'Inversora particular',
      avatar: 'C', 
      avatarBg: '#ff6f00', 
    },
    {
      id: 2,
      rating: 5,
      text: "La plataforma DCF es increíblemente intuitiva y me ha ayudado a visualizar mejor mis inversiones. El equipo siempre está disponible para resolver mis dudas y me han guiado en momentos de volatilidad del mercado. Excelente servicio y atención personalizada.",
      author: 'Leandro Santuoro',
      role: 'Inversor particular',
      avatar: 'L', 
      avatarBg: '#5e35b1', 
    },
    {
      id: 3,
      rating: 5,
      text: "Como empresa en crecimiento, necesitábamos optimizar nuestras finanzas y el equipo de DCF nos proporcionó soluciones a medida que han mejorado significativamente nuestra gestión de capital. Su asesoramiento para PYMES ha sido fundamental para nuestro desarrollo.",
      author: 'Miguel Sánchez Marsico',
      role: 'Director Financiero',
      avatar: 'M', 
      avatarBg: '#1e88e5', 
    },
  ];

  return (
    <TestimonialsSectionContainer>
      <Container maxWidth="lg">
      
        <Typography
          variant="h4" color="primary" sx={{ mb: 1, fontWeight: 'medium', background:"#e5eef1", width:"auto", fontSize:"16px", display:"inline-block", padding:"10px", borderRadius:"30px" }}
        >
          Testimonios reales
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
          >          Sus palabras, nuestro mayor respaldo
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
              <TestimonialCard>
                <CardContent>
                  <Rating name={`testimonial-rating-${testimonial.id}`} value={testimonial.rating} readOnly sx={{ mb: 2, color: '#ffc107' }} />
                  <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1, minHeight: '80px', fontSize:"16px", color:"rgba(102, 102, 102, 1)" }}> {/* flexGrow for consistent spacing, minHeight to push author info down */}
                    "{testimonial.text}"
                  </Typography>
                  <AuthorInfo>
                    <Avatar sx={{ bgcolor: testimonial.avatarBg, mr: 2 }}>
                      {testimonial.avatar.charAt(0)} 
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color:"rgba(102, 102, 102, 1)" }}>
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" sx={{color:"rgba(102, 102, 102, 1)"}}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </AuthorInfo>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;