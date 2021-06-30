import { class_name, icon, target, text_color, text_size } from '../types';
import MuiIcon from '@material-ui/core/Icon';
import textSizeClass from '../utils/textSizeClass';
import clsx from 'clsx';
import Clickable from './Clickable';
import Image from './Image';

const colorMap: { [key: string]: undefined | 'primary' | 'secondary' | 'inherit' | 'action' | 'error' } = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'error',
    default: undefined,
    inherit: 'inherit',
};

function mapColor(c) {
    return colorMap[c || 'default'] || colorMap['default'];
}

export function Icon({ icon, size, onClick, color, ...props }: IconProps) {
    if (!icon) return null;
    let content;
    switch (typeof icon) {
        case 'string':
            if ('/' === icon.slice(0, 1) || 'http' === icon.slice(0, 4)) {
                content = <Image url={icon} alt={''} {...props} />;
                break;
            }
            const iconColor = mapColor(color);
            if (size) {
                content = (
                    <MuiIcon color={iconColor} {...props} className={clsx(textSizeClass({ size }), props.className)}>
                        {icon}
                    </MuiIcon>
                );
                break;
            }
            content = (
                <MuiIcon color={iconColor} {...props}>
                    {icon}
                </MuiIcon>
            );
            break;
        default:
            content = icon;
            break;
    }

    return (
        <Clickable onClick={onClick} inline>
            {content}
        </Clickable>
    );
}

export interface IconProps {
    icon?: icon;
    size?: text_size;
    className?: class_name;
    onClick?: target;
    color?: text_color;
}

export default Icon;
