import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Typography, Grid, Button, Card } from '@material-ui/core';
import { Box } from '@mui/material';
import User from '../../models/User';
import './Dashboard.css';

function DashboardDoador() {

    const [token, setToken] = useLocalStorage('token')
    const [user, setuser] = useState<User[]>([])
    const [dataUser] = useLocalStorage('user')
    const userLogado = JSON.parse(dataUser);
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
    }, [token])

    if (userLogado.condicao == 'DOADOR') {
        return (
            <>
                {
                    <Grid xs={7}>
                            <Typography variant='h2' className='h1'>
                                 Olá, {userLogado.nome}!
                            </Typography>
                            <Box>
                                <Box className='acesso-doacoes'>
                                    <Typography>Para acessar suas doações</Typography>
                                    <Link to={`/produtos/id/empresas/${userLogado.id}`} className='link'>clique aqui</Link>
                                </Box>
                                
                            </Box>
                    </Grid>
                }
            </>
        )

    }
    else {
        return (
            <>
                {
                    <Typography variant='h1'>
                        Olá, {userLogado.nome}
                    </Typography>
                }
            </>
        )
    }


}

export default DashboardDoador;