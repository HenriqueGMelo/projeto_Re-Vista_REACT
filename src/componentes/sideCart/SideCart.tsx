import React, { useState } from 'react';
import { Drawer, Button, Divider } from '@material-ui/core';
import { CartItem, useCart } from '../../hooks/useCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import "./SideCart.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';
import sacola from './sacola.png'

type Anchor = 'right';

interface PostAcaoDTO {
    qtdAcao: number,
    ong: {
        id:number
    },
    produto: {
        id:number
    }
}

export default function SideCart() {

    let navigate = useNavigate();
    const [token] = useLocalStorage('token');
    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(produto: CartItem) {
        const IncrementArguments = {
            idProduto: produto.id,
            amount: produto.qtdProduto + 10
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(produto: CartItem) {
        const IncrementArguments = {
            idProduto: produto.id,
            amount: produto.qtdProduto - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(idProduto: number) {
        removeProduct(idProduto)
    }

    async function handleClick() {
        if (token === "") {
            toast.error('Você precisa estar logado para finalizar o pedido!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            navigate("/login")
        }
        else {
            toast.success('Pedido Realizado com Sucesso!!', {
                theme: "colored"
            })
        }
    }

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <>
            <div>
                <Divider />
                {cart.map(produto => (
                    <div key={produto.id} className="container-carrinho">
                        <h3>{produto?.titulo}</h3>
                        <img src={produto?.urL_Imagem} alt={produto?.titulo} className='imgCart' />
                        <h4>{produto.qtdProduto}x</h4>

                        <div >
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                disabled={produto.qtdProduto <= 1}
                                onClick={() => handleProductDecrement(produto)}
                            >
                                <RemoveCircleOutlineIcon />
                            </Button>
                            <input
                                type="text"
                                readOnly
                                value={produto.qtdProduto}
                            />
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                data-testid="increment-product"
                                onClick={() => handleProductIncrement(produto)}
                            >
                                <AddCircleOutlineIcon />
                            </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className='btnDelete'
                            onClick={() => handleRemoveProduct(produto.id)}
                            startIcon={<DeleteIcon />}>
                            Remover
                        </Button>
                        <hr />
                    </div>

                ))}
                <Divider />
            </div>
            <div className='btFinish1'>
                <Link to="/produtos-ong" className="text-decoration">
                    <button className='btn2' type='submit' value='submit' onClick={handleClick}>
                        Finalizar Pedido
                    </button>
                </Link>
            </div>

            <div className='modalCart'>
                {/* <BasicModal /> */}
            </div>
        </>
    );

    return (
        /* BOTÃO DO CARRINHO */
        /* BOTÃO DO CARRINHO */
        <div>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <img src={sacola} alt="oi" />
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}