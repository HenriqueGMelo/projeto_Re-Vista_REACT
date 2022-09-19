import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListaProduto.css';
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, Typography, CardMedia, CardActionArea } from "@material-ui/core";
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
                    <Box m={2}>
                         <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos disponíveis em estoques
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produto.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produto.criador?.nome}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${produto.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${produto.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))   
            }
        </>
    )



}

export default ListaProduto;