// noinspection ES6PreferShortImport
import { AdminContextProvider } from '../contexts/AdminContext';

const map = {
    admin: AdminContextProvider,
};

export function useTypeContextProviderComponent(type, throwError = true) {
    const comp = map[type || ''];

    if (!comp && throwError) throw new Error(`Unknown type '${type}'`);

    return comp;
}

// noinspection JSUnusedGlobalSymbols
export default useTypeContextProviderComponent;
