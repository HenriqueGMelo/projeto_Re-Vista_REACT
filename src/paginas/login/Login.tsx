import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

// Crie seu próprio tema:
const theme = createTheme({
  palette: {
    primary: {
      light: "#3c7000",
      main: "#3c7000",
      dark: "#3c7000",
      contrastText: "#3c7000",
    },
  },
});


function Login () {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="fundo4"
      >
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form>
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
                className="texto1"
              >
                Entrar
              </Typography>
              
              <MuiThemeProvider theme={theme}>
              <TextField
                id="usuario"
                label="usuario"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              ></TextField>
              <TextField
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              ></TextField>
              </MuiThemeProvider>
              <Box marginTop={2} textAlign="center">
                <Link to="/home" className="text-decoration">
                  <Button type="submit" variant="contained" className="btn">
                    Logar
                  </Button>
                </Link>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario" className="text-decoration">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="cadastro"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imagem"></Grid>
      </Grid>
    );
}

export default Login;