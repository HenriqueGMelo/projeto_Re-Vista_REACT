import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import { Box } from '@mui/material';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
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

const BLACK_LIST_DOCUMENTO_ARRAY = [
    //CPF
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',

    //CNPJ
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
];

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
        const result = ValidaEFormataCPFouCNPJ(user.documento);
        console.log(result)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /**
     * Caso documento seja valido retorna ele formatado,
     * caso não retorna uma string vazia.
     *
     * @export
     * @param {(string | undefined)} documento
     * @returns {string}
     */

    function ValidaEFormataCPFouCNPJ(documento: string | undefined): string {
        if (typeof documento !== 'string') {
            return '';
        }
        //retira os caracteres indesejados...
        const documentoClear = documento.replace(/[^0-9]*/g, '');

        if (documentoClear.length === 11) {
            //realizar a formatação... (CPF)
            if (ValidCpf(documentoClear)) {
                return documentoClear.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else {
                return '';
            }
        } else if (documentoClear.length === 14) {
            //realizar a formatação... (CNPJ)
            if (ValidCnpj(documentoClear)) {
                return documentoClear.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * Função para validar CPF.
     *
     * @param {string} cpf_a_validar
     * @returns {boolean}
     */

    function ValidCpf(cpf: string): boolean {
        // Verificando e validando CPF
        if (!cpf || cpf.length !== 11 || BLACK_LIST_DOCUMENTO_ARRAY.indexOf(cpf) !== -1 ? true : false) return false;

        // <-- Validação
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
        // Validação -->
    }

    /**
     * Função para validar CNPJ.
     *
     * @param {string} cnpj_a_validar
     * @returns {boolean}
     */
    function ValidCnpj(cnpj: string): boolean {
        // Verificando e validando CNPJ
        if (!cnpj || cnpj.length !== 14 || BLACK_LIST_DOCUMENTO_ARRAY.indexOf(cnpj) !== -1 ? true : false) return false;

        // <-- Validação
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += Number(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado !== Number(digitos.charAt(0))) return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += Number(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado !== Number(digitos.charAt(1))) return false;
        return true;
        // Validação -->
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const result = ValidaEFormataCPFouCNPJ(user.documento);
        if (confirmarSenha === user.senha && result !== '' && user.email !== '' && user.nome !== '' && user.endereco !== '') {
            cadastroUsuario(`/api/Usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            history('/login')
        }
        else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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