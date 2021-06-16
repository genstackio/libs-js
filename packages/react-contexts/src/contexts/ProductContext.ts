import {createContext} from "react";
import createDefaultProductContextValue from '../utils/createDefaultProductContextValue';
const ProductContext = createContext(createDefaultProductContextValue())
export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;
ProductContext.displayName = 'ProductContext';
export default ProductContext