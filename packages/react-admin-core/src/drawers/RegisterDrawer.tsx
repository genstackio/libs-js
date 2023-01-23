import RegisterScreen from '../screens/RegisterScreen';

// noinspection JSUnusedLocalSymbols
export function RegisterDrawer({ onClose }: RegisterDrawerProps) {
    return <RegisterScreen image={undefined} layout={'none'} onSuccess={onClose} />;
}

export interface RegisterDrawerProps {
    onClose: Function;
}

// noinspection JSUnusedGlobalSymbols
export default RegisterDrawer;
