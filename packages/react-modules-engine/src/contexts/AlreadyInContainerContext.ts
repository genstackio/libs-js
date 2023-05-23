import { createContext } from 'react';

export const AlreadyInContainerContext = createContext<boolean>(false);
export const AlreadyInContainerContextProvider = AlreadyInContainerContext.Provider;
export const AlreadyInContainerContextConsumer = AlreadyInContainerContext.Consumer;

export default AlreadyInContainerContext;
