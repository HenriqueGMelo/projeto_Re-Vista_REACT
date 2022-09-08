import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoum from "./logoum.jpg";


function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="flex fundo3" variant="dense">
          <Box>
            <img src={logoum} className='center' alt="logo" /> 
          </Box>

          <Box display="flex" justifyContent="start" className="cortext">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
