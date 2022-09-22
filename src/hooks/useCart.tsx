import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
// import Products from '../components/produtos/listaproduto/ListaProduto';
import Produto from '../models/Produto';
import { api } from '../services/Service';

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

export interface CartProduct extends Produto {
    qtdProduto: number;
}

interface CartContextData {
    cart: CartProduct[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const cartStorageKey = "@revista:cart";

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<CartProduct[]>(() => {
        const storagedCart = localStorage.getItem(cartStorageKey)

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (id: number) => {
        try {
            const productAlreadyInCart = cart.find(product => product.id === id)

            if (!productAlreadyInCart) {
                const { data: product } = await api.get<Produto>(`/api/Produtos/id/${id}`);

                if (product?.qtdProduto && product.qtdProduto > 0) {
                    setCart([...cart, { ...product, qtdProduto: 1 }])
                    localStorage.setItem(cartStorageKey, JSON.stringify([...cart, { ...product, productAmount: 1 }]))
                    toast.success(product.titulo + ' adicionado ao carrinho', {
                    theme:"colored"
                    })
                    return;
                }
            }

            if (productAlreadyInCart) {
                const { data: product } = await api.get<Produto>(`/api/Produtos/id/${id}`);

                if (product?.qtdProduto && (product.qtdProduto > productAlreadyInCart.qtdProduto)) {
                    const updatedCart = cart.map(cartItem => cartItem.id === id ? {
                        ...cartItem,
                        productAmount: Number(cartItem.qtdProduto) + 1
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

    const removeProduct = (productId: number) => {
        try {
            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na remoção do produto');
                return
            }

            const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount < 1) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const response = await api.get<Produto>(`/api/Produtos/id/${productId}`);
            const qtdProduto = response.data?.qtdProduto ?? 0;
            const stockIsFree = amount > qtdProduto

            if (stockIsFree) {
                toast.error('Quantidade solicitada fora de estoque')
                return
            }

            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
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