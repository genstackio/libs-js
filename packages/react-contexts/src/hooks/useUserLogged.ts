import useUser from './useUser';

export const useUserLogged = () => {
    return !!useUser()[0];
};

export default useUserLogged;
