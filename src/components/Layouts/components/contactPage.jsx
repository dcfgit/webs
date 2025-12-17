import React, { useEffect } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { LocationOn, Email } from "@mui/icons-material";
import Script from "next/script"; // Importamos el componente de Next.js

export default function ContactPage() {
  
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "transparent" }}>
      {/* Cargamos el script de Clientify de forma optimizada */}
      <Script 
        src="https://api.clientify.net/web-marketing/superforms/script/268832.js"
        strategy="afterInteractive" // Se carga cuando la página ya es interactiva
      />

      <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
        
        {/* LADO IZQUIERDO: TEXTO */}
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

        {/* LADO DERECHO: EL FORMULARIO */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ p: 0, bgcolor: 'transparent' }}>
            {/* MUY IMPORTANTE: 
               Clientify usualmente busca un div con su ID de formulario. 
               Si el script no encuentra este ID, no pinta nada.
            */}
            <div className="clientify-forms-268832" id="clientify-forms-268832">
               {/* El script inyectará el formulario aquí automáticamente */}
            </div>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}