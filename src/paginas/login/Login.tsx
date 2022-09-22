import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service"
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { toast } from 'react-toastify';

// Crie seu próprio tema:
const theme = createTheme({
  palette: {
    primary: {
      light: "#36607a",
      main: "#36607a",
      dark: "#36607a",
      contrastText: "#36607a",
    },
  },
});

const user = {
  id: 0,
  nome: "",
  email: "",
  senha: "",
  endereco: "",
  documento: "",
  tipo: "",
  condicao: "",
}

function Login() {

  let history = useNavigate();

  const [token, setToken] = useLocalStorage('token');
  const [dataUser, setDataUser] = useLocalStorage('user', JSON.stringify(user));

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    email: '',
    senha: '',
    token: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token != '') {
      history("/home")
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/api/Usuarios/logar`, userLogin, setToken, setDataUser)

      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    }
    catch (error) {
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="back3"
    >
      <Grid xs={6} className="imagem   "></Grid>
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="texto1"
            >
              {" "}
              Entrar
            </Typography>

            <MuiThemeProvider theme={theme}>
              <TextField
                className="fundo4"
                value={userLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="email"
                label="E-mail"
                variant="outlined"
                name="email"
                margin="normal"
                fullWidth
              ></TextField>
              <TextField
                className="fundo4"
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="Senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              ></TextField>
            </MuiThemeProvider>

            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="btn">
                Logar
              </Button>
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
    </Grid>
  );
}

export default Login;