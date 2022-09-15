import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo3 from "./logo3.png";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');

  return (
    <>
      <AppBar position="fixed" className="opa">
        <Toolbar className="fundo3" variant="dense">
          <Grid item xs={6} mx={1} className="caixa1">
            <Link to="/home" className="text-decorator-none">
              <Box marginX={3} className="texto2">
                <Typography variant="h6" className="cursor">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre" className="text-decorator-none">
              <Box marginX={3}>
                <Typography variant="h6" className="cursor">
                  Sobre
                </Typography>
              </Box>
            </Link>
            <Link to="/doacao" className="text-decorator-none">
              <Box marginX={3}>
                <Typography variant="h6" className="cursor">
                  Doação
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Box className="caixa2">
              <img src={logo3} className="center" alt="logo" />
            </Box>
          </Grid>

          {
            token === ''
              ?
              <Grid item xs={6} className="caixa1">
                <Link to="/cadastrousuario" className="text-decorator-none">
                  <Box marginX={3}>
                    <Typography variant="h6" className="cursor">
                      Cadastre-se
                    </Typography>
                  </Box>
                </Link>
                <Link to="/login" className="text-decorator-none">
                  <Box marginX={3}>
                    <Typography variant="h6" className="cursor">
                      Login
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              :
              <Grid item xs={6} className="caixa1">
                <Link to="/logout" className="text-decorator-none">
                  <Box marginX={3}>
                    <Typography variant="h6" className="cursor">
                      Logout
                    </Typography>
                  </Box>
                </Link>
              </Grid>
          }
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
