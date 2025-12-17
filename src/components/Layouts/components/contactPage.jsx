import React, { useEffect } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function ContactPage() {
  
  useEffect(() => {
    // 1. Crear el elemento script
    const script = document.createElement("script");
    script.src = "https://api.clientify.net/web-marketing/superforms/script/268832.js";
    script.type = "text/javascript";
    script.async = true;

    // 2. Buscar el contenedor donde queremos que aparezca el formulario
    const container = document.getElementById("clientify-form-container");
    if (container) {
      container.appendChild(script);
    }

    // Limpieza al desmontar el componente
    return () => {
      if (container) {
        container.innerHTML = ""; 
      }
    };
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "transparent" }}>
      <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
        
        {/* LADO IZQUIERDO: INFORMACIÓN */}
        <Grid item xs={12} md={5}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "rgba(0, 104, 132, 1)" }}>
            Contactanos
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "rgba(102, 102, 102, 1)" }}>
            Estamos para asesorarte. Completá el formulario y un asesor se pondrá en contacto con vos a la brevedad.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Email sx={{ color: "rgba(0, 104, 132, 1)" }} />
              <Typography sx={{ color: "rgba(102, 102, 102, 1)" }}>info@dcfinversiones.com.ar</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOn sx={{ color: "rgba(0, 104, 132, 1)" }} />
              <Typography sx={{ color: "rgba(102, 102, 102, 1)" }}>Buenos Aires, Argentina</Typography>
            </Box>
          </Box>
        </Grid>

        {/* LADO DERECHO: EL FORMULARIO DE CLIENTIFY */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: "20px" }}>
            {/* Este div es donde Clientify inyectará el formulario */}
            <div id="clientify-form-container"></div>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}