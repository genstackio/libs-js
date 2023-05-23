import StaticImg from './StaticImg';

export function Logo({ style, className = '', src = 'logos/default.png' }: LogoProps) {
    return <StaticImg style={{ ...style }} className={className} src={src} />;
}

export interface LogoProps {
    style?: any;
    className?: string;
    src?: string;
}

export default Logo;
