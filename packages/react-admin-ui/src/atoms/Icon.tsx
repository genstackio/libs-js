import clsx from 'clsx';
import { class_name, icon, target, text_color, text_size } from '../types';
import MuiIcon from '@material-ui/core/Icon';
import textSizeClass from '../utils/textSizeClass';
import Clickable from './Clickable';
import Image from './Image';
import Loadable from '@loadable/component';
import Badge from '@material-ui/core/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapFaSize } from '../mappings/fa-sizes';
import { mapIconColor } from '../mappings/icon-colors';

export function Icon({ count = 0, icon, size, onClick, color, ...props }: IconProps) {
    if (!icon) return null;
    const className = props.className;
    let content;
    switch (typeof icon) {
        case 'string':
            if ('/' === icon.slice(0, 1) || 'http' === icon.slice(0, 4)) {
                content = <Image url={icon} alt={''} {...props} />;
                break;
            }
            if ('@' === icon.slice(0, 1)) {
                const name = icon
                    .slice(1)
                    .split(/-/g)
                    .map((x) => `${x.slice(0, 1).toUpperCase()}${x.slice(1)}`)
                    .join('');
                /* eslint react/display-name: 0 */
                const TheIcon = Loadable(() => import(`../images/icons/${name}`).catch(() => () => <div />));
                content = <TheIcon {...props} />;
            } else {
                const iconColor = mapIconColor(color);
                if ('fa-' === icon.slice(0, 3)) {
                    let xx = icon.slice(3).split(/--/g) as any;
                    xx.length === 1 && (xx = xx[0]);
                    content = (
                        <FontAwesomeIcon icon={xx} className={className} {...(size ? { size: mapFaSize(size) } : {})} />
                    );
                    break;
                }
                if (size) {
                    content = (
                        <MuiIcon color={iconColor} {...props} className={clsx(textSizeClass({ size }), className)}>
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
            }
            break;
        default:
            content = icon;
            break;
    }

    content = (
        <Clickable onClick={onClick} inline>
            {content}
        </Clickable>
    );

    count &&
        (content = (
            <Badge badgeContent={count} color={'primary'} max={99}>
                {content}
            </Badge>
        ));

    return content;
}

export interface IconProps {
    className?: class_name;
    count?: number;
    icon?: icon;
    size?: text_size;
    onClick?: target;
    color?: text_color;
}

export default Icon;
