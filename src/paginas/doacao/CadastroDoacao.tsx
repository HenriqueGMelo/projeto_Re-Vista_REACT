import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box, SelectChangeEvent } from '@mui/material';
import Doacao from "../../models/Doacao";
import { doacao } from "../../services/Service";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import './CadastroDoacao.css';

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

function CadastroDoacao() {

    let navigate = useNavigate();
    const [user, setUser] = useState<Doacao>(
        {
            id: 0,
            Titulo: "",
            Descricao: "",
            QtdProduto: "",
            QtdLimite: "",
            URL_Imagem: ""
        }
    )

    const [userResult, setUserResult] = useState<Doacao>(
        {
            id: 0,
            Titulo: "",
            Descricao: "",
            QtdProduto: "",
            QtdLimite: "",
            URL_Imagem: ""
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/home")
        }
    }, [userResult])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.Titulo == user.Titulo) {
            doacao(`/doacao`, user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        }
        else {
            alert('Dados inconsistentes. Por favor, verifique as informações do cadastro.')
        }
    }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={10} alignItems='center'>
                <Box paddingX={20} marginTop={20}>
                    <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='textotitulo'>Doação</Typography>
                    <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='subtexto'>Realize sua doação preenchendo os campos</Typography>
                </Box>
            </Grid>
            
            <Grid item xs={5} alignItems='center'>
                <Box paddingX={15} marginTop={10}>
                    <form onSubmit={onSubmit}>
                        <MuiThemeProvider theme={theme}>
                            <TextField value={user.Titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="Titulo" label="Titulo" variant="outlined" name="Titulo" margin="normal" className="background" fullWidth></TextField>
                            <TextField value={user.Descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='Descricao' label='Descricao' variant='outlined' name='Descricao' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={user.QtdProduto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='QtdProduto' label='QtdProduto' variant='outlined' name='QtdProduto' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={user.QtdLimite} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='QtdLimite' label='QtdLimite' variant='outlined' name='QtdLimite' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={user.URL_Imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='URL_Imagem' label='URL_Imagem' variant='outlined' name='URL_Imagem' margin='normal' className="background" fullWidth></TextField>
                        </MuiThemeProvider>
                    </form>
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
                        Concluir
                    </Button>
                </Box>
            </Grid>
        </Grid >
    );
}

export default CadastroDoacao;