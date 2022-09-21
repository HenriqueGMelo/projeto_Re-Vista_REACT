import React, { useEffect, useState } from 'react';
import './ListaProdutos.css';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { busca, listar } from '../../../../services/Service';
import User from '../../../../models/User';
import Pedido from '../../../../models/Pedidos';

function ListaProdutos(prop: any) {
    const [produtos, setProdutos] = useState<Pedido[]>([]);

    async function getProdutos() {
        await busca('/api/Produto/', setProdutos, {
            params: {
                produtosLista: produtos,
                categoria: prop.tipo,
                ordem: prop.ordem,
            }
        })
    }

    useEffect(() => {
        getProdutos()

    }, [produtos.length])

    console.log(prop.tipo);
    console.log(prop.ordem);

    return (
        <>
            {produtos.map(produto => (
                'ONG' === prop.tipo
                    ?
                    <>

                        <article className='card'>
                            <img src={produto.urL_Imagem} alt={produto.titulo} id='img-card' />
                            <h1>{produto.titulo}</h1>
                            <h3>{produto.descricao}</h3>
                            <h3>Quantidade: {produto.qtdProduto}</h3>
                            <h3>{produto.tipo}</h3>
                            <button id='concluir'>Concluir</button>
                        </article>
                    </>
                    :
                    ''
            ))}

            {produtos.map(produto => (
                produto.tipo === prop.tipo
                    ?
                    <article className='card'>
                        <img src={produto.urL_Imagem} alt={produto.titulo} id='img-card' />
                        <h1>{produto.titulo}</h1>
                        <h3>{produto.descricao}</h3>
                        <h3>Quantidade: {produto.qtdProduto}</h3>
                        <h3>{produto.tipo}</h3>
                        <button id='concluir'>Concluir</button>
                    </article>
                    :
                    ''
            ))}
        </>
    );
}

export default ListaProdutos;