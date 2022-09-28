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
    const [produto, setProduto] = useState<Produto>()
    const [token] = useLocalStorage('token')
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Conecte-se novamente para verificar doações disponíveis")
            navigate("/login")
        }
        getProduto()
    }, [token])

    async function getProduto() {
        await buscaId(`/api/Produtos/id/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }
    
    if (produto == null) {
        return (
            <>
                <Typography variant='h3'>Nenhum produto disponível </Typography>
            </>
        )
    }
    return (
        <section id='lista_produtos' className='display'>
            
                
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
                
            
        </section>
    )
}

export default VitrineProduto;