import useDrawerContext from "@genstackio/react-contexts/lib/hooks/useDrawerContext";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";
import Drawer from "./Drawer";

// noinspection JSUnusedLocalSymbols
export function AppDrawer(props: AppDrawerProps) {
    const {opened, close, view, data, setData, } = useDrawerContext();
    const Comp = useComponent('drawer', view);
    return (
        <Drawer opened={opened} onClose={close}>
            {!!Comp && <Comp opened={opened} onClose={close} data={data} setData={setData} />}
        </Drawer>
    );
}

export interface AppDrawerProps {
}

// noinspection JSUnusedGlobalSymbols
export default AppDrawer;
