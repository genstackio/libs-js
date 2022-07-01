import {useCallback, useMemo} from "react";
import useUser from "@genstackio/react-contexts/lib/hooks/useUser";
import {useHistory} from "react-router-dom";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";
import useBreadcrumbsFactory from "@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory";

export function UserProfileScreen() {
    const history = useHistory();
    const [user] = useUser();
    const id = user!.id || '';
    const breadcrumbsName = 'user-profile'
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const breadcrumbs = useBreadcrumbs(breadcrumbsName, breadcrumbsFactory, {id});
    const Component = useComponent('screen_template', 'display');

    const name = 'user';
    const properties = useMemo(() => [
        'email', 'firstName', 'lastName',
    ], []);
    const goEdit = useCallback(() => {
        history.push('/user/profile/edit')
    }, [history]);

    return <Component id={id}
                                  name={name}
                                  breadcrumbs={breadcrumbs}
                                  properties={properties}
                                  onEditClick={goEdit}
            />
}

// noinspection JSUnusedGlobalSymbols
export default UserProfileScreen
