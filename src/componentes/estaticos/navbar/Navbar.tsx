import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import logoum from "./logoum.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="fixed" className="opa">
        <Toolbar className="fundo3" variant="dense">

          <Grid item xs={6} mx={1} className="caixa1">
            <Link to='/home' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='/sobre' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Sobre
                </Typography>
              </Box>
            </Link>
            <Link to='/doacao' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Doação
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Box className="caixa2">
              <img src={logoum} className="center" alt="logo" />
            </Box>
          </Grid>

          <Grid item xs={6} className="caixa1">
            <Link to='/cadastrousuario' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Cadastre-se
                </Typography>
              </Box>
            </Link>
            <Link to='/login' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Login
                </Typography>
              </Box>
            </Link>
            <Link to='/contato' className='text-decorator-none'>
              <Box marginX={3} className='cursor'>
                <Typography variant="h6">
                  Contato
                </Typography>
              </Box>
            </Link>
          </Grid>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
