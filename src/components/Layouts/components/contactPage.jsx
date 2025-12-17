import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { LocationOn, Email } from "@mui/icons-material";
import Script from "next/script";

export default function ContactPage() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "transparent" }}>
      {/* Usamos strategy="beforeInteractive" o "lazyOnload" 
        pero el truco está en el contenedor con el ID exacto 
      */}
      <Script 
        src="https://api.clientify.net/web-marketing/superforms/script/268832.js"
        strategy="lazyOnload" 
      />

      <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
        
        {/* COLUMNA IZQUIERDA */}
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

        {/* COLUMNA DERECHA: EL FORMULARIO */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: 0, bgcolor: 'transparent', minHeight: '500px' }}>
            {/* ESTE DIV ES LA SOLUCIÓN:
               Clientify busca un elemento que tenga esta clase exacta para 
               inyectar el iframe sin usar document.write.
            */}
            <div 
                className="clientify-forms-268832" 
                data-form-id="268832"
                style={{ width: '100%', minHeight: '500px' }}
            ></div>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}