import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
// import Products from '../components/produtos/listaproduto/ListaProduto';
import Produto from '../models/Produto';
import { api } from '../services/Service';
import useLocalStorage from 'react-use-localstorage';

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    idProduto: number;
    amount: number;
}

export interface CartItem extends Produto {
    qtdProduto: number;
}

interface CartContextData {
    cart: CartItem[];
    addProduct: (idProduto: number) => Promise<void>;
    removeProduct: (idProduto: number) => void;
    updateProductAmount: ({ idProduto, amount }: UpdateProductAmount) => void;
}

const cartStorageKey = "@revista:cart";

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const storagedCart = localStorage.getItem(cartStorageKey)

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (idProduto: number) => {
        try {
            const productAlreadyInCart = cart.find(produto => produto.id === idProduto)

            if (!productAlreadyInCart) {
                const { data: produto } = await api.get<Produto>(`/api/Produtos/id/${idProduto}`);

                if (produto?.qtdProduto && produto.qtdProduto > 0) {
                    setCart([...cart, { ...produto, qtdProduto: 1 }])
                    localStorage.setItem(cartStorageKey, JSON.stringify([...cart, { ...produto, qtdProduto: 1 }]))
                    toast.success(produto.titulo + ' adicionado ao carrinho', {
                    theme:"colored"
                    })
                    return;
                }
            }

            if (productAlreadyInCart) {
                const { data: produto } = await api.get<Produto>(`/api/Produtos/id/${idProduto}`);

                if (produto?.qtdProduto && (produto.qtdProduto > productAlreadyInCart.qtdProduto)) {
                    const updatedCart = cart.map(cartItem => cartItem.id === idProduto ? {
                        ...cartItem,
                        qtdProduto: Number(cartItem.qtdProduto) + 1
                    } : cartItem)

                    setCart(updatedCart)
                    localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
                    return;
                } else {
                    toast.error('Quantidade solicitada fora de estoque')
                }
            }
        } catch {
            toast.error('Erro na adição do produto')
        }
    };

    const removeProduct = (idProduto: number) => {
        try {
            const productExists = cart.some(cartProduct => cartProduct.id === idProduto)
            if (!productExists) {
                toast.error('Erro na remoção do produto');
                return
            }

            const updatedCart = cart.filter(cartItem => cartItem.id !== idProduto)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    const updateProductAmount = async ({
        idProduto,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount < 1) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const response = await api.get<Produto>(`/api/Produtos/id/${idProduto}`);
            const qtdProduto = response.data?.qtdProduto ?? 0;
            const stockIsFree = amount > qtdProduto

            if (stockIsFree) {
                toast.error('Quantidade solicitada fora de estoque')
                return
            }

            const productExists = cart.some(cartProduct => cartProduct.id === idProduto)
            if (!productExists) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const updatedCart = cart.map(cartItem => cartItem.id === idProduto ? {
                ...cartItem,
                qtdProduto: amount
            } : cartItem)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}