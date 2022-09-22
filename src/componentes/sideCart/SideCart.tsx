import React, { ChangeEvent } from 'react';
import { Drawer, Button, Divider, Badge, IconButton, Typography } from '@material-ui/core';
import { CartProduct, useCart } from '../../hooks/useCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import "./SideCart.css";
import { toast } from 'react-toastify';
// import BasicModal from '../payment/modal/Modal';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

type Anchor = 'right';

export default function SideCart() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(product: CartProduct) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.qtdProduto + 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(product: CartProduct) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.qtdProduto - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }

    function handleClick() {
        if (token === "") {
            toast.error('Você precisa estar logado para finalizar a compra!', {
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

            toast.success('Compra Realizada com Sucesso!!', {
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

    /* Conteudo do carrinho Altera Aqui */

    const list = (anchor: Anchor) => (
        <>
            <div>
                <Divider />
                {cart.map(product => (
                    <div key={product.id} className="container-carrinho">
                        <h3>{product?.titulo}</h3>
                        <img src={product?.urL_Imagem} alt={product?.titulo} className='imgCart' />
                        <h4>{product.qtdProduto}x</h4>

                        <div >
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                disabled={product.qtdProduto <= 1}
                                onClick={() => handleProductDecrement(product)}
                            >
                                <RemoveCircleOutlineIcon />
                            </Button>
                            <input
                                type="text"
                                readOnly
                                value={product.qtdProduto}
                            />
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                data-testid="increment-product"
                                onClick={() => handleProductIncrement(product)}
                            >
                                <AddCircleOutlineIcon />
                            </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className='btnDelete'
                            onClick={() => handleRemoveProduct(product.id)}
                            startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <hr />
                    </div>

                ))}
                <Divider />
            </div>
             <div className='btFinish1'><button className='btn2' type='submit' value='submit' onClick={handleClick}>
                Finalizar Compra
            </button>
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
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}