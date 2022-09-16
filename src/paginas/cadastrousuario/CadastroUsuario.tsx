import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";


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

function CadastroUsuario() {

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            documento: "",
            tipo: "NORMAL",
            condicao: ""
        }
    )

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            documento: "",
            tipo: "",
            condicao: ""
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/api/Usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        }
        else {
            alert('Dados inconsistentes. Por favor, verifique as informações do cadastro.')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={10} alignItems='center'>
                    <Box paddingX={20} marginTop={20}>
                        <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='textotitulo'>Cadastro</Typography>
                        <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='subtexto'>Cadastre-se e nos ajude a vestir o mundo com solidariedade!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={5} alignItems='center'>
                    <Box paddingX={15} marginTop={10}>
                        <div>
                            <MuiThemeProvider theme={theme}>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" className="background" fullWidth></TextField>
                                <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' className="background" fullWidth></TextField>
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' className="background" type='password' fullWidth></TextField>
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='senha' margin='normal' className="background" type='password' fullWidth></TextField>
                            </MuiThemeProvider>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={5} alignItems='center'>
                    <Box paddingX={15} marginTop={10}>
                        <div >
                            <MuiThemeProvider theme={theme}>
                                <FormControl
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    variant="outlined" className="background" margin="normal" fullWidth>
                                    <InputLabel htmlFor="outlined-age-native-simple">Condição</InputLabel>
                                    <Select
                                        value={user.condicao}
                                        native
                                        label="condicao"
                                        inputProps={{
                                            name: 'condicao',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="ONG">ONG</option>
                                        <option value="DOADOR">DOADOR</option>
                                    </Select>
                                </FormControl>
                                <TextField value={user.documento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="documento" label="CPF/CNPJ" variant="outlined" name="documento" className="background" margin="normal" fullWidth></TextField>
                                <TextField value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='Endereço' variant='outlined' name='endereco' margin='normal' className="background" fullWidth></TextField>
                            </MuiThemeProvider>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} alignItems='center'>
                    <Box marginTop={10} textAlign='center'>
                        <Link to='/login' className='text-decorator-none' >
                            <Button variant='contained' className='btncancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' className='btncadastro'>
                            Cadastrar
                        </Button>
                    </Box>
                </Grid>
            </Grid >
        </form>
    );
}

export default CadastroUsuario;