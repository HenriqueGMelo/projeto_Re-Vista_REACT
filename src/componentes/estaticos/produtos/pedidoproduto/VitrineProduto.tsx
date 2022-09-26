import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, listar } from '../../../../services/Service';
import User from '../../../../models/User';
import './VitrineProduto.css';

function VitrineProduto() {
    const { id } = useParams<{ id: string }>();
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token] = useLocalStorage('token')
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
    }, [token])

    async function getProduto() {
        await listar(`/api/Produtos/id/${id}`, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`api/Produtos/id/${id}`, setProdutos, {
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
                <Typography variant='h3'>Nenhum produto disponível </Typography>
            </>
        )
    }
    return (
        <section id='lista_produtos' className='display'>
            {
                produtos.map(produto => (
                    <div>
                        <div>
                            <figure>
                                <img src={produto.urL_Imagem} alt="Imagem do produto" />
                            </figure>
                        </div>
                        <div>
                            <header>

                                <h2>{produto.titulo}</h2>

                            </header>
                            <footer>
                                <p>
                                    {produto.descricao}
                                </p>
                                <div>

                                    <h3>
                                        Qtd: {produto.qtdLimite}
                                    </h3>
                                </div>
                            </footer>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default VitrineProduto;