import LoginScreen from '../screens/LoginScreen';

// noinspection JSUnusedLocalSymbols
export function LoginDrawer({ onClose }: LoginDrawerProps) {
    return <LoginScreen image={undefined} layout={'none'} onSuccess={onClose} />;
}

export interface LoginDrawerProps {
    onClose: Function;
}

// noinspection JSUnusedGlobalSymbols
export default LoginDrawer;
