import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Box} from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoum from "./logoum.jpg";


function Navbar() {
  return (
    <>
      <AppBar position="fixed" className="opa">
        <Toolbar className="fundo3" variant="dense">
          <Grid className="caixa" item xs={12}>
            <Grid item xs={6} mx={1} className="caixa1">
              <Box marginX={3}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
              <Box marginX={3}>
                {" "}
                <Typography variant="h6">Sobre</Typography>
              </Box>
              <Box marginX={3}>
                <Typography variant="h6" color="inherit">
                  Doação
                </Typography>
              </Box>
            </Grid>

            <Grid item xs= {2} >
              <Box className="caixa2">
                <img src={logoum} className="center" alt="logo" />
              </Box>
            </Grid>

            <Grid item xs={6} className="caixa3">
              <Box marginX={3}>
                <Typography variant="h6" color="inherit">
                  Cadastre-se
                </Typography>
              </Box>
              <Box marginX={3}>
                <Typography variant="h6" color="inherit">
                  Login
                </Typography>
              </Box>
              <Box marginX={3}>
                <Typography variant="h6" color="inherit">
                  Contato
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
