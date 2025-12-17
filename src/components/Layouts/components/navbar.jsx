import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; 
import {PopupNewsletter} from "../popup";
const ResponsiveNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

  const logoImageUrl = "/webs/assets/logo-blanco.webp"; 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Servicios", href: "/#servicios" },
    { title: "Nosotros", href: "/#nosotros" },
    { title: "Contacto", href: "/contacto" },
    { title: "Abri tu cuenta", href: "/#cuenta" },
  ];

  const drawer = (
    <Box
      sx={{
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(0, 104, 132, 1)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        position: 'relative',
      }}
      role="presentation"
      onClick={handleDrawerToggle} 
      onKeyDown={handleDrawerToggle} 
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: theme.spacing(3),
          right: theme.spacing(2),
          color: 'white',
        }}
      >
      </IconButton>

   

      <List sx={{ textAlign: "center" }}>
        {navLinks.map((item) => (
          <ListItem key={item.title} component="a" href={item.href} sx={{ color: "white", textDecoration: "none" }}>
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                variant: "h6",
                fontWeight: "bold",
                sx: { py: 1 },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center", mt: 1 }}>
          <Button
            variant="contained"
            href="/login"
            sx={{
              background: "linear-gradient(90deg, #004d80, #0077b6)",
              color: "white",
              padding: "0.8rem 2rem",
              borderRadius: "25px",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                background: "linear-gradient(90deg, #0077b6, #004d80)",
              },
            }}
          >
            Ingresar a Plataforma DCF
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="absolute" 
      sx={{
        background: "rgba(15, 34, 41, 0.75)", 
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
        py: 1, 
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}> 
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <a href="/"><img
            src={logoImageUrl}
            alt="Company Logo"
            style={{ height: "auto", maxWidth: "120px" }}
          /></a>
          
        </Box>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{
                borderRadius: "25px",
                display: "flex",
              }}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.title}
                  component="a"
                  href={item.href}
                  sx={{
                    background: "transparent",
                    color: "white",
                    padding: "0.5rem 1.5rem",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "background 0.3s",
                    "&.active": {
                      background: "white",
                      color: "black",
                      borderRadius: "25px",
                    },
                    "&:hover": {
                       color: "#0077b6",
                    }
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              href="#"
              sx={{
                background: "linear-gradient(90deg, #004d80, #0077b6)",
                color: "white",
                padding: "0.5rem 1.5rem",
                borderRadius: "25px",
                fontWeight: "bold",
                "&:hover": {
                  background: "linear-gradient(90deg, #0077b6, #004d80)",
                },
              }}
            >
              <PopupNewsletter/>
            </Button>
          </Box>
        )}

        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" 
            onClick={handleDrawerToggle}
            sx={{ ml: 2, color: "white" }} 
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        )}
      </Toolbar>

      <Drawer
        anchor="right" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "100%", 
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default ResponsiveNavbar;