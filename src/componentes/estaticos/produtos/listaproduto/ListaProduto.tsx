import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListaProduto.css';
import { Card, CardActions, CardContent, CardActionArea, Box } from '@mui/material'
import { Button,  Typography, CardMedia, Grid } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { listar } from '../../../../services/Service';
import User from '../../../../models/User';


function ListaProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token')
    const [user, setUser] = useState<User[]>([])
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
    }, [token])
   
    async function getProduto() {
        await listar("/api/Produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        getProduto()
    }, [produtos.length])
    
    if (produtos.length <1) {
        return (
            <>
            <Typography variant='h1'>Nenhuma doação disponível </Typography>
            </>
        )
    }
    return (
        <>        
            {
                produtos.map(produto => (
                    <Grid className='grid'>  
                        <Link to={`/produtos/${produto.id}`} className="box">
                            <Card >
                                <CardActionArea className='grid'>
                                    <CardMedia
                                        component="img"
                                        height="250vh"
                                        image={produto.urL_Imagem}
                                        alt="Imagem do produto"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {produto.titulo}
                                        </Typography>
                                        <Box className='boxcard'>
                                            <Typography variant="body2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus eius optio voluptatum unde quis temporibus ad, animi debitis consequatur rem? Est nulla in, repellendus quae doloremque laboriosam sint eum.
                                            </Typography>
                                            <Typography variant="body2">
                                                Qtd: {produto.qtdLimite}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        
                        </Link>                      
                    </Grid>
                ))   
            }
        </>
    )



}

export default ListaProduto;