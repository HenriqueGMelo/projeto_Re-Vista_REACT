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
    const [user, setUser] = useState<User[]>([])
    const [acoes, setAcoes] = useState<Acao[]>([])
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar seu histórico de doações")
            navigate("/login")
        }
    }, [token])

    async function getAcao() {
        await acaoserv("/api/Acao", setAcoes, {
            headers: {
                'Authorization': token
            }
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
                                <img src={acao.urL_Imagem} alt="Imagem do produto" />
                            </figure>
                            <div>
                                <header>

                                    <h2>{acao.titulo}</h2>

                                </header>
                                <footer>
                                    <p>
                                        {acao.descricao}
                                    </p>
                                    <h3>
                                        Qtd: {acao}
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