import RegisterScreen from "../screens/RegisterScreen";
import DrawerContainer from "../organisms/DrawerContainer";

// noinspection JSUnusedLocalSymbols
export function RegisterDrawer(props: RegisterDrawerProps) {
    return (
        <DrawerContainer>
            <RegisterScreen image={undefined} layout={'none'} />
        </DrawerContainer>
    );
}

export interface RegisterDrawerProps {
}

// noinspection JSUnusedGlobalSymbols
export default RegisterDrawer;
