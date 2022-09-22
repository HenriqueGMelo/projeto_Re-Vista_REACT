import React, { useEffect, useState } from 'react';
import './ListaProdutos.css';
import { busca, listar } from '../../../../services/Service';
import Pedidos from '../../../../models/Pedidos';

function ListaProdutos(prop: any) {
    const [produtos, setProdutos] = useState<Pedidos[]>([]);

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