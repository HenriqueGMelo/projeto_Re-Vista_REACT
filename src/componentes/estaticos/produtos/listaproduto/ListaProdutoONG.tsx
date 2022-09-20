import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, CardActionArea, CardMedia, Typography, Grid } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { listar } from '../../../../services/Service';
import User from '../../../../models/User';


function ListaProdutosDoador() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token')
    const [dataUser] = useLocalStorage('user')
    const userLogado = JSON.parse(dataUser);
    const [user, setUser] = useState<User[]>([])
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
    }, [token])

// usar outra lógica para buscar o id? ***********************

    async function getProduto() {
        await listar(`/api/Produtos/id/empresas/${userLogado.id}`, setProdutos, {
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

export default ListaProdutosDoador;