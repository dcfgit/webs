import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Alert
} from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function ContactPage() {
  const videoRef = useRef(null);

  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    empresa: "",
    asunto: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.play().catch((err) => {
        console.warn("Autoplay bloqueado:", err);
      });
    }
  }, []);

  // Manejo de inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch(
        "https://consulting-production-d00a.up.railway.app/landing/enviar-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          empresa: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error en la petición:", err);
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(0, 77, 128, 0.7), rgba(0, 0, 0, 0.4))",
        color: "white",
        pt: 17,
        pb: 10,
        px: { xs: 2, md: 8 },
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="hero-video-background"
        poster="https://res.cloudinary.com/dhmrxjxzx/video/upload/so_0/OpeningDCF.jpg"
      >
        <source src="/assets/videos/VideoHome.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      <Grid container spacing={4} alignItems="center">
  
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "28px",
                sm: "42px",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            ¿En qué podemos ayudarte?
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "grey.300" }}>
            Completa el formulario con tu consulta y te responderemos a la
            brevedad
          </Typography>

          <Stack spacing={4} sx={{ mt: 6 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "rgba(0,128,128,0.2)",
                  p: 1.5,
                  borderRadius: 2,
                }}
              >
                <LocationOn sx={{ color: "teal.main", fontSize: 30 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="600">
                  Dirección
                </Typography>
                <Typography variant="body2" color="grey.300">
                  Maipú 128, Bernal
                  <br />
                  CP1876, Argentina
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "rgba(0,128,128,0.2)",
                  p: 1.5,
                  borderRadius: 2,
                }}
              >
                <Phone sx={{ color: "teal.main", fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="600">
                  Teléfono
                </Typography>
                <Typography variant="body2" color="grey.300">
                  <a
                    href="https://api.whatsapp.com/send?phone=541154636957&text=Buenas%20tardes%2C%20DCF%20Inversiones%2C%20quisiera%20consultar%20por%20un%20asesoramiento."
                    target="_blank"
                    rel="noreferrer"
                  >
                    +54 11 5463-6957
                  </a>
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "rgba(0,128,128,0.2)",
                  p: 1.5,
                  borderRadius: 2,
                }}
              >
                <Email sx={{ color: "teal.main", fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="600">
                  E-mail
                </Typography>
                <Typography variant="body2" color="grey.300">
                  <a
                    href="mailto:info@dcfinversiones.com.ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@dcfinversiones.com.ar
                  </a>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>

       
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: "white",
              color: "black",
              width: { xs: "100%", sm: "450px" },
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                  <TextField
                    label="Nombre"
                    fullWidth
                    variant="outlined"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Correo electrónico"
                    fullWidth
                    variant="outlined"
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Teléfono"
                    fullWidth
                    variant="outlined"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Compañía/Empresa"
                    fullWidth
                    variant="outlined"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Asunto"
                    fullWidth
                    variant="outlined"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensaje"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={5}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Mensajes */}
                {success && (
                  <Grid item xs={12}>
                    <Alert severity="success">Mensaje enviado</Alert>
                  </Grid>
                )}
                {error && (
                  <Grid item xs={12}>
                    <Alert severity="error">
                      Hubo un problema al enviar el mensaje
                    </Alert>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "linear-gradient(90deg, #004d80, #0077b6)",
                      color: "white",
                      padding: "0.5rem 1.5rem",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #0077b6, #004d80)",
                      },
                    }}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
