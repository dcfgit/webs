import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { LocationOn, Email } from "@mui/icons-material";

export default function ContactPage() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, bgcolor: "transparent" }}>
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

        {/* LADO DERECHO: EL FORMULARIO (VÍA IFRAME) */}
        <Grid item xs={12} md={7}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 1, 
              borderRadius: "20px", 
              overflow: "hidden", 
              minHeight: "600px",
              display: "flex"
            }}
          >
            <iframe 
              src="https://api.clientify.net/web-marketing/superforms/show/268832" 
              style={{
                width: "100%",
                height: "650px",
                border: "none",
                borderRadius: "15px"
              }}
              title="Formulario de Contacto"
            ></iframe>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}