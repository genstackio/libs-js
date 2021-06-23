import { cart, cart_context_value } from '../types';

export const createDefaultCartContextValue = (defaultValue: cart | undefined = undefined): cart_context_value => ({
    cart: defaultValue,
    /* eslint @typescript-eslint/no-empty-function: 0 */
    setCart: (cart: cart | undefined) => {},
    /* eslint @typescript-eslint/no-empty-function: 0 */
    resetCart: () => {},
});

export default createDefaultCartContextValue;
