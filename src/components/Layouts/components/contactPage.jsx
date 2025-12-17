import React, { useEffect } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { LocationOn, Email } from "@mui/icons-material";

export default function ContactPage() {
  
  useEffect(() => {
    // Definimos el ID del contenedor
    const containerId = "clientify-form-268832"; // ID estándar que suele usar Clientify
    const container = document.getElementById("clientify-form-container");

    if (container && !document.getElementById("clientify-script")) {
      const script = document.createElement("script");
      script.id = "clientify-script";
      script.src = "https://api.clientify.net/web-marketing/superforms/script/268832.js";
      script.type = "text/javascript";
      script.async = true;
      
      container.appendChild(script);
    }
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "transparent" }}>
      <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
        
        {/* INFORMACIÓN DE CONTACTO */}
        <Grid item xs={12} md={5}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "rgba(0, 104, 132, 1)" }}>
            Contactanos
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "rgba(102, 102, 102, 1)" }}>
            Completá el formulario y un asesor se pondrá en contacto con vos.
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

        {/* CONTENEDOR DEL FORMULARIO */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: "20px", bgcolor: 'transparent' }}>
            <div id="clientify-form-container">
              {/* El formulario se cargará aquí dentro */}
            </div>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}