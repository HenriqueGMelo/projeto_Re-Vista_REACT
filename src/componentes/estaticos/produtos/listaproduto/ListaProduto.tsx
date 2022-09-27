import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListaProduto.css';
import { Button, Typography, Grid } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { listar } from '../../../../services/Service';
import User from '../../../../models/User';
import { Box } from '@mui/material';
import { useCart } from '../../../../hooks/useCart';

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

    const { addProduct } = useCart();

    function handleAddCart(produtoId: number) {
        addProduct(produtoId)
    }

    useEffect(() => {
        getProduto()
    }, [produtos.length])

    if (produtos.length < 1) {
        return (
            <>
                <Typography variant='h3'>Nenhuma doação disponível </Typography>
            </>
        )
    }
    return (
        <>
            <Grid xs={12} >
                <Box className="top">
                    <h2>Produtos</h2>
                </Box>
            </Grid>

            <section id='lista_produtos' className='alinhamento'>
                {
                    produtos.map(produto => (
                        <article className="section2 cardprodutos card-content">
                           
                                <figure>
                                    <img src={produto.urL_Imagem} alt="Imagem do produto" className="imagemProdutos" />
                                </figure>
                                <div>
                                    <header>

                                        <h2 className='nomeProdutos'>{produto.titulo}</h2>

                                    </header>
                                    <footer>

                                        <p  className='fonteProdutos'>
                                            {produto.descricao}
                                        </p>
                                        
                                        <h3 className='qtdProdutos'>
                                            Qtd: {produto.qtdLimite}
                                        </h3>
                                        <Box display="flex" justifyContent="center" mb={1.5}>  
                                            <Box mx={1}>
                                                <Button variant='contained' className="btn-produtos" onClick={() => handleAddCart(produto.id)} >
                                                    Adicionar ao carrinho
                                                </Button>
                                            </Box>
                                    </Box>
                                    </footer>
                                </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}

export default ListaProduto;