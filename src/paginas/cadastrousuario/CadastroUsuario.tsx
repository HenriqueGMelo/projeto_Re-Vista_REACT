import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
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


function CadastroUsuario(){
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo4'>
            <Grid item xs={5} alignItems='center'>
                <Box >
                    <form>
                        <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='textos2'>Cadastre-se e nos ajude a vestir o mundo com solidariedade!</Typography>
                        <MuiThemeProvider theme={theme}>
                            <TextField 
                            id="nome"
                            label="nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                            ></TextField>
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth></TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField id='tipo' label='tipo' variant='outlined' name='tipo' margin='normal' fullWidth></TextField>
                        </MuiThemeProvider>
                        <Box marginTop = { 2 } textAlign='center'>
                            <Link to='/login' className='text-decorator-none' >
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className='btn2'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;