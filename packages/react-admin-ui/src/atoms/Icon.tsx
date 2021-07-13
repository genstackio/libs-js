import clsx from 'clsx';
import { target } from '../types';
import MuiIcon from '@material-ui/core/Icon';
import textSizeClass from '../utils/textSizeClass';
import Clickable from './Clickable';
import Image from './Image';
import Loadable from '@loadable/component';
import Badge from '@material-ui/core/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapFaSize } from '../mappings/fa-sizes';
import { mapIconColor } from '../mappings/icon-colors';
import { WithClassName, WithIcon, WithTextColor, WithTextSize, WithWidth, WithHeight } from '../withs';

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
                const tokens = icon.slice(1).split(/\//g);
                let name = (tokens.pop() || '')
                    .split(/-/g)
                    .map((x) => `${x.slice(0, 1).toUpperCase()}${x.slice(1)}`)
                    .join('');
                name = `${tokens.length ? `${tokens.join('/')}/` : ''}${name}`;
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

export interface IconProps extends WithClassName, WithIcon, WithTextColor, WithTextSize, WithWidth, WithHeight {
    count?: number;
    onClick?: target;
}

export default Icon;
