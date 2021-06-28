import { class_name, icon, target, text_size } from '../types';
import MuiIcon from '@material-ui/core/Icon';
import textSizeClass from '../utils/textSizeClass';
import clsx from 'clsx';
import Clickable from './Clickable';
import Image from './Image';

export function Icon({ icon, size, onClick, ...props }: IconProps) {
    if (!icon) return null;
    let content;
    switch (typeof icon) {
        case 'string':
            if ('/' === icon.slice(0, 1) || 'http' === icon.slice(0, 4)) {
                content = <Image url={icon} alt={''} {...props} />;
                break;
            }
            if (size) {
                content = (
                    <MuiIcon {...props} className={clsx(textSizeClass({ size }), props.className)}>
                        {icon}
                    </MuiIcon>
                );
                break;
            }
            content = <MuiIcon {...props}>{icon}</MuiIcon>;
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
}

export default Icon;
