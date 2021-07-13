import UserToolbar, { UserToolbarProps } from '@genstackio/react-admin-ui/lib/molecules/UserToolbar';

export function AppToolbar(props: AppToolbarProps) {
    return <UserToolbar {...props} />;
}

export type AppToolbarProps = UserToolbarProps;

export default AppToolbar;
