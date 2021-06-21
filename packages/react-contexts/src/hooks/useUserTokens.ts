import {useContext, useMemo} from "react";
import UserContext from "../contexts/UserContext";

export const useUserTokens = () => {
    const {user, getTokens, setTokens} = useContext(UserContext);
    return useMemo(() => ({
        token: user?.token,
        refreshToken: user?.refreshToken,
        getCurrentUserTokens: getTokens,
        setCurrentUserTokens: setTokens,
    }), [user, getTokens, setTokens]);
};

export default useUserTokens