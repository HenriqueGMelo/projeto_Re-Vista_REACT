import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        await listar(/api/Acao, setProdutos, {
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
                <h1>Nenhuma doação disponível </h1>
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

export default ListaProdutosDoador;