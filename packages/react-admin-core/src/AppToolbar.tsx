import {UserToolbar, UserToolbarProps} from "@genstackio/react-admin-ui";

export function AppToolbar(props: AppToolbarProps) {
    return (
        <UserToolbar {...props} />
    );
}

export interface AppToolbarProps extends UserToolbarProps {}

export default AppToolbar;
