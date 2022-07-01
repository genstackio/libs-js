import {useMemo} from "react";
import {AppLayout as BaseAppLayout, AppLayoutProps as BaseAppLayoutProps} from "./AppLayout";
import useMenu from "../hooks/useMenu";
import useMenusFactory from "@genstackio/react-contexts/lib/hooks/useMenusFactory";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";
import useLogos from "@genstackio/react-contexts/lib/hooks/useLogos";

export function MainAppLayout({children, ...props}: MainAppLayoutProps) {
    const menusFactory = useMenusFactory();
    const ToolbarComponent = useComponent('toolbar', 'app')
    const toolbarProps = useMemo(() => ({languageEnabled: true, children: ToolbarComponent}), [ToolbarComponent]);
    const menu = useMenu('main', menusFactory);
    const userMenu = useMenu('user', menusFactory);
    const {logoFull} = useLogos();

    return (
        <BaseAppLayout toolbarProps={toolbarProps} logo={logoFull} menu={menu} userMenu={userMenu} {...props}>
            {children}
        </BaseAppLayout>
    );
}

export interface MainAppLayoutProps extends BaseAppLayoutProps {}

export default MainAppLayout
