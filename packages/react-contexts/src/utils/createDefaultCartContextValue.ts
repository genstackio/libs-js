import {cart, cart_context_value} from '../types';

export const createDefaultCartContextValue = (defaultValue: cart|undefined = undefined): cart_context_value =>
    ({cart: defaultValue, setCart: (cart: cart|undefined) => {}, resetCart: () => {}})
;

export default createDefaultCartContextValue
