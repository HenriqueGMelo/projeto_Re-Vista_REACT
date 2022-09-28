import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { acaoserv, listar } from '../../../../services/Service';
import User from '../../../../models/User';
import Acao from '../../../../models/Acao';


function ListaProdutosONG() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token')
    const [dataUser] = useLocalStorage('user')
    const userLogado = JSON.parse(dataUser);
    
    const [acoes, setAcoes] = useState<Acao[]>([])
    const params = new URLSearchParams();
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar seu histórico de doações")
            navigate("/login")
        }
    }, [token])

    async function getAcao() {
        params.append('idUsuario', userLogado.id)
        await acaoserv("/api/Acao", setAcoes, {
            params: params
        })
    }
    useEffect(() => {
        getAcao()
    }, [acoes.length])

    if (acoes.length < 1) {
        return (
            <>
                <h1>Nenhuma doação recebida </h1>
            </>
        )
    }
    return (
        <section id='lista_produtos'>
            {
                acoes.map(acao => (
                    <article>
                        <Link to={`/produtos/${acao.produto}`} className='decorator' >
                            <figure>
                                <img src={acao.produto.urL_Imagem} alt="Imagem do produto" />
                            </figure>
                            <div>
                                <header>

                                    <h2>{acao.produto.titulo}</h2>

                                </header>
                                <footer>
                                    <p>
                                        {acao.produto.descricao}
                                    </p>
                                    <h3>
                                        Qtd: {acao.qtdAcao}
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

export default ListaProdutosONG;