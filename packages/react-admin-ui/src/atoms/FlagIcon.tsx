import Icon, { IconProps } from './Icon';

export function FlagIcon({ locale, ...props }: FlagIconProps) {
    return <Icon icon={`@flags/${locale.split(/-/)[1].toLowerCase()}`} width={30} height={20} {...props} />;
}

export interface FlagIconProps extends IconProps {
    locale: string;
}

export default FlagIcon;
