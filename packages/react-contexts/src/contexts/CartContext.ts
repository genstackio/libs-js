import { createContext } from 'react';
import createDefaultCartContextValue from '../utils/createDefaultCartContextValue';
const CartContext = createContext(createDefaultCartContextValue());
export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;
CartContext.displayName = 'CartContext';
export default CartContext;
