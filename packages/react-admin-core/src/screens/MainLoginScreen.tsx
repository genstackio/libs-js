import BaseLoginScreen, { LoginScreenProps as BaseLoginScreenProps } from './LoginScreen';
import useLogos from '@genstackio/react-contexts/lib/hooks/useLogos';

export function MainLoginScreen(props: MainLoginScreenProps) {
    const { logoFull } = useLogos();
    return <BaseLoginScreen logo={logoFull} {...props} onForgotPasswordClick={'/user/forgot-password'} />;
}

export type MainLoginScreenProps = BaseLoginScreenProps;

// noinspection JSUnusedGlobalSymbols
export default MainLoginScreen;
