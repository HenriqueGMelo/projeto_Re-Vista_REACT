import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListaProduto.css';
import { Button, Typography, CardMedia, Grid } from "@material-ui/core";
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

    if (produtos.length < 1) {
        return (
            <>
                <Typography variant='h1'>Nenhuma doação disponível </Typography>
            </>
        )
    }
    return (
        <section id='lista_produtos'>
            {
                produtos.map(produto => (
                    <article>
                        <Link to={`/produtos/${produto.id}`} className='decorator' >
                            <figure>
                                <img src={produto.urL_Imagem} alt="Imagem do produto" />
                            </figure>
                            <div>
                                <header>

                                    <h2>{produto.titulo}</h2>

                                </header>
                                <footer>
                                    <p>
                                        {produto.descricao}
                                    </p>
                                    <h3>
                                        Qtd: {produto.qtdLimite}
                                    </h3>
                                </footer>
                            </div>
                        </Link>
                    </article>
                ))
            }
        </section>
    )



}

export default ListaProduto;