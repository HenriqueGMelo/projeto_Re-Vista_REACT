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
                                 Olá {userLogado.nome}!
                            </Typography>
                            <Box className='fazemos'>
                                <Box className='fazemosbox'>
                                    <Typography>Para acessar suas doações</Typography>
                                    <Link to={`/api/produtos/id/empresas/${userLogado.id}`} className='link'>clique aqui</Link>
                                </Box>
                                <Box className='fazemosbox'>
                                    <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                    </p>
                                </Box>
                                <Box className='fazemosbox'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sapiente odit, eius voluptatibus odio repudiandae. Officia totam tenetur, illum velit molestias error, modi, enim quibusdam quod maiores dicta eligendi.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores autem, quidem fugit repudiandae officiis culpa quas est deleniti tenetur. Unde deserunt at, libero qui fuga deleniti mollitia vitae recusandae soluta.
                                    </p>
                                    <img src="https://uniformesnatalrn.com.br/image/catalog/sobre-nos.png" alt="" />
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
                        Olá {userLogado.nome}
                    </Typography>
                }
            </>
        )
    }


}

export default DashboardDoador;