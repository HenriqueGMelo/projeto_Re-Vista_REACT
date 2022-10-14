import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Produto from '../../../../models/Produto';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, listar } from '../../../../services/Service';
import User from '../../../../models/User';
import './VitrineProduto.css';
import {Button} from '@material-ui/core';
import {useCart} from "../../../../hooks/useCart";


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

    const { addProduct } = useCart();

    function handleAddCart(produtoId: number) {
      addProduct(produtoId);
    }
    
    if (produto == null) {
        return (
            <>
                <Typography variant='h3' className="corSIM">Nenhum produto disponível</Typography>
            </>
        )
    }
    return (
      <section id="lista_produtos" className="display">
        <div className="vitrine1">
          <div>
            <figure>
              <img
                className="tamanhoRoupa"
                src={produto.urL_Imagem}
                alt="Imagem do produto"
              />
            </figure>
          </div>
          <div className="vitrine2">
            <header className="NomeTop">
              <h2>{produto.titulo}</h2>
            </header>
            <div className="vitrine2">
              <p className="p1">{produto.descricao}</p>
              <div>
                <h3>
                  Quantidade <h2 className="qtd">{produto.qtdLimite}</h2>
                </h3>
                <Button
                  variant="contained"
                  className="btn-produtos1"
                  onClick={() => handleAddCart(produto.id)}
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default VitrineProduto;