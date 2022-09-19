import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, CardActionArea, CardMedia, Typography } from "@material-ui/core";
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

    async function getProduto() {
        await listar(`/produtos/id/empresas/${userLogado.id}`, setProdutos, {
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
                    <Box>
                        <Card variant="outlined" className='size boxcard'>
                            <Card >
                                <CardActionArea className='cards'>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={produto.urL_Imagem}
                                        alt="Imagem do lixão de roupas do Atacama"
                                        
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {produto.titulo}
                                        </Typography>
                                        <Typography variant="body2">
                                            {produto.descricao}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
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

export default ListaProdutosDoador;