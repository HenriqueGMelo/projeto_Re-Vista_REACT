import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Typography, Grid, Button, Card } from '@material-ui/core';
import { Box } from '@mui/material';
import User from '../../models/User';
import './Dashboard.css';

function DashboardDoador() {

    const [token, setToken] = useLocalStorage('token')
    const [user, setuser] = useState<User[]>([])
    const [dataUser] = useLocalStorage('user')
    const userLogado = JSON.parse(dataUser);
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
    }, [token])

    if (userLogado.condicao == 'DOADOR') {
        return (
            <section>
                {
                    <div className='container'>
                            <h2 className='titulo'>
                                 Olá, {userLogado.nome}! Vamos ajudar quem precisa?
                            </h2>
                            <div className='container1'>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/conceito-de-doacao-de-roupas-desenhadas-a-mao_23-2148823305.jpg?w=826&t=st=1663774304~exp=1663774904~hmac=92a63657a3dc8dbb4041abe5f2bf6185cdee0b5c26319b7fdfc60e63c0ac6aff" alt=""/>
                                
                                    <a href={`/produtos/id/empresas/${userLogado.id}`} className='link'>
                                        <button className='button'>
                                            Clique aqui para acessar suas doações
                                        </button>  
                                    </a>
                                </div>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/conceito-de-doacao-de-roupas-desenhadas_23-2148832529.jpg?w=740&t=st=1663783104~exp=1663783704~hmac=116a254060468e66e8225396f4e014ba7e3a619b89613c3a3b539161f553d74b" alt=""/>
                                
                                    <a href='/cadastrodoacao' className='link'>
                                        <button className='button'>
                                            Clique aqui para registrar uma doação
                                        </button>  
                                    </a>
                                </div>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-login-no-tablet_114360-7863.jpg?w=740&t=st=1663784208~exp=1663784808~hmac=31d42e88ac348c35cf89a7722358bfab8320e0081f5c098fced8568e7fb8fa7f" alt=""/>
                                
                                    <a href='/minhaconta' className='link'>
                                        <button className='button'>
                                            Configure a sua conta
                                        </button>  
                                    </a>
                                </div>
                            </div>
                    </div>
                    
                }
            </section>
        )

    }
    else {
        return (
            <section>
                {
                    <div className='container'>
                            <h2 className='titulo-ong'>
                                 Olá, {userLogado.nome}! Vamos fazer a diferença na vida de quem precisa!
                            </h2>
                            <div className='container1'>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/conceito-de-doacao-de-roupas-desenhadas-a-mao_52683-54709.jpg?size=626&ext=jpg&ga=GA1.2.872356562.1661582973" alt=""/>
                                
                                    <a href={`/produtos/id/empresas/${userLogado.id}`} className='link'>
                                        <button className='button-ong'>
                                            Veja suas doações recebidas
                                        </button>  
                                    </a>
                                </div>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-solidariedade_114360-6226.jpg?w=740&t=st=1663858111~exp=1663858711~hmac=4209ed572d6f2fd21fbff4fceda3bc13d824d0f699b88fc46724c55eedd3b9e3" alt=""/>
                                
                                    <a href='/cadastrodoacao' className='link'>
                                        <button className='button-ong'>
                                            Veja as doações que estão disponíveis
                                        </button>  
                                    </a>
                                </div>
                                <div className='container'>
                                    <img className='img-doador' src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-login-no-tablet_114360-7863.jpg?w=740&t=st=1663784208~exp=1663784808~hmac=31d42e88ac348c35cf89a7722358bfab8320e0081f5c098fced8568e7fb8fa7f" alt=""/>
                                
                                    <a href='/minhaconta' className='link'>
                                        <button className='button-ong'>
                                            Configure a sua conta
                                        </button>  
                                    </a>
                                </div>
                            </div>
                    </div>
                    
                }
            </section>
        )
    }


}

export default DashboardDoador;