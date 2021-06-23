import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { cart } from '../types';

export const useCart = (): [cart | undefined, (cart) => any | undefined, () => void] => {
    const { cart, setCart, resetCart } = useContext(CartContext);
    return [cart, setCart, resetCart];
};

export default useCart;
