import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  Button,
  Typography,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export  function PopupNewsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Email enviado:", email);
    setEmail("");
    setOpen(false);
  };

  return (
    <Box sx={{borderRadius:"50px"}}>
  
      <Button
        sx={{
            background:"transparent",
            border:"none",
            color:"#fff"
        }}
        onClick={handleOpen}
      >
        Ingresar a Plataforma DCF
      </Button>

    
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
        <DialogTitle sx={{ m: 0, p: 4, color:"rgba(102, 102, 102, 1)", fontWeight:"700",
            fontSize:{sm:"34px", xs:"18px"}, textAlign:"center" }}>
          Estamos por lanzar nuestra plataforma en breve
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Si querés mantenerte informado y ser de los primeros en probarla,
            dejanos tu mail:
          </Typography>
          <TextField
            label="Tu email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
                background: "linear-gradient(90deg, #004d80, #0077b6)",
                color: "white",
                padding: "0.5rem 1.5rem",
                borderRadius: "25px",
                fontWeight: "bold",
                 width:{sm:"200px", xs:"100%"},
                 mb:4,
                "&:hover": {
                  background: "linear-gradient(90deg, #0077b6, #004d80)",
                },
              }}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export  function PopupNewsletterFooter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Email enviado:", email);
    setEmail("");
    setOpen(false);
  };

  return (
    <Box sx={{borderRadius:"50px"}}>
  
      <Typography
        variant="body2"
        onClick={handleOpen}
      >
        Ingresar a Plataforma DCF
      </Typography>

    
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
        <DialogTitle sx={{ m: 0, p: 4, color:"rgba(102, 102, 102, 1)", fontWeight:"700",
            fontSize:{sm:"34px", xs:"18px"}, textAlign:"center" }}>
          Estamos por lanzar nuestra plataforma en breve
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Si querés mantenerte informado y ser de los primeros en probarla,
            dejanos tu mail:
          </Typography>
          <TextField
            label="Tu email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
                background: "linear-gradient(90deg, #004d80, #0077b6)",
                color: "white",
                padding: "0.5rem 1.5rem",
                borderRadius: "25px",
                fontWeight: "bold",
                 width:{sm:"200px", xs:"100%"},
                 mb:4,
                "&:hover": {
                  background: "linear-gradient(90deg, #0077b6, #004d80)",
                },
              }}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
