import {useMemo} from "react";
import useUser from "@genstackio/react-contexts/lib/hooks/useUser";
import {useTranslation} from "react-i18next";
import {menu_item} from "@genstackio/react-admin-ui/lib/types";
import {useHistory} from 'react-router-dom';
import {menu_ctx} from "../types";

export function useMenu(name: string, factory: (name: string, ctx: menu_ctx) => menu_item[]) {
    const [user] = useUser();
    const history = useHistory();
    const {t} = useTranslation();

    return useMemo(() => factory(name, {t, user, history}), [factory, name, t, user]);
}

export default useMenu;
