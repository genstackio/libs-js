import {useContext} from "react";
import UserContext from "../contexts/UserContext";
import {user, user_context_value} from "../types";

export const useUser = (): [user|undefined, (user) => any|undefined, () => any|undefined, () => any|undefined] => {
    const {user, setUser, logout, refreshUser} = useContext<user_context_value>(UserContext);
    return [user, setUser, logout, refreshUser];
};

export default useUser
