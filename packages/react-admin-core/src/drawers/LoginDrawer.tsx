import LoginScreen from "../screens/LoginScreen";
import DrawerContainer from "../organisms/DrawerContainer";

// noinspection JSUnusedLocalSymbols
export function LoginDrawer(props: LoginDrawerProps) {
    return (
        <DrawerContainer>
            <LoginScreen image={undefined} layout={'none'} />
        </DrawerContainer>
    );
}

export interface LoginDrawerProps {
}

// noinspection JSUnusedGlobalSymbols
export default LoginDrawer;
