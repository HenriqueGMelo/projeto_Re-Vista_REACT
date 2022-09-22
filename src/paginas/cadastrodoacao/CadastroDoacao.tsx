import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Doacao from "../../models/Doacao";
import { cadastroDoacao } from "../../services/Service";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import './CadastroDoacao.css';
import useLocalStorage from "react-use-localstorage";
import { toast } from "react-toastify";

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

export default function CadastroDoacao() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const [token] = useLocalStorage('token');
    const [dataUser, setDataUser] = useLocalStorage('user');

    const userLogado = JSON.parse(dataUser);

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado para doar");
            navigate("/login");
        }

        console.log(userLogado.condicao);

    }, [token])

    const [doacao, setDoacao] = useState<Doacao>(
        {
            id: 0,
            titulo: "",
            descricao: "",
            qtdProduto: "",
            qtdLimite: "",
            urL_Imagem: "",
            criador: {
                id: parseInt(userLogado.id),
                nome: "",
                email: "",
                senha: "",
                endereco: "",
                documento: "",
                tipo: userLogado.tipo,
                condicao: userLogado.condicao,
            },
        }
    )

    const [doacaoResult, setDoacaoResult] = useState<Doacao>(
        {
            id: 0,
            titulo: "",
            descricao: "",
            qtdProduto: "",
            qtdLimite: "",
            urL_Imagem: "",
            criador: {
                id: parseInt(userLogado.id),
                nome: "",
                email: "",
                senha: "",
                endereco: "",
                documento: "",
                tipo: userLogado.tipo,
                condicao: userLogado.condicao,
            },
        })

    useEffect(() => {
        if (doacaoResult.id !== 0) {
            navigate("/home")
        }
    }, [doacaoResult])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setDoacao({
            ...doacao,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (
            doacao.titulo !== '' &&
            doacao.descricao !== '' &&
            doacao.qtdProduto >= '' &&
            doacao.qtdLimite >= '') {
                console.log(doacao);
            cadastroDoacao(`/api/Produtos`, doacao, setDoacaoResult)
            toast.success('Doação registrada com sucesso!', {
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
        else {
            toast.error('Por favor, preencha os campos corretamente', {
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
        <form onSubmit={onSubmit}>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={10} alignItems='center'>
                    <Box paddingX={20} marginTop={20}>
                        <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='textotitulo'>Doação</Typography>
                        <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='subtexto'>Realize sua doação preenchendo os campos</Typography>
                    </Box>
                </Grid>

                <Grid item xs={5} alignItems='center'>
                    <Box paddingX={15} marginTop={10}>
                        <MuiThemeProvider theme={theme}>
                            <TextField value={doacao.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="Titulo" label="Titulo" variant="outlined" name="titulo" margin="normal" className="background" fullWidth></TextField>
                            <TextField value={doacao.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='Descricao' label='Descricao' variant='outlined' name='descricao' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={doacao.qtdProduto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='QtdProduto' label='QtdProduto' variant='outlined' name='qtdProduto' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={doacao.qtdLimite} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='QtdLimite' label='QtdLimite' variant='outlined' name='qtdLimite' margin='normal' className="background" fullWidth></TextField>
                            <TextField value={doacao.urL_Imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='URL_Imagem' label='URL_Imagem' variant='outlined' name='urL_Imagem' margin='normal' className="background" fullWidth></TextField>
                        </MuiThemeProvider>
                    </Box>
                </Grid>

                <Grid item xs={12} alignItems='center'>
                    <Box marginTop={10} textAlign='center'>
                        <Link to='/login' className='text-decorator-none' >
                            <Button variant='contained' className='btncancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' className='btnconcluir'>
                            Concluir
                        </Button>
                    </Box>
                </Grid>
            </Grid >
        </form>
    );
}