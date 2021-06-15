import {ReactNode} from "react";
import MuiIcon from '@material-ui/core/Icon';

export function Icon({icon, size = 20, ...props}) {
    if (!icon) return null;
    switch (typeof icon) {
        case 'string':
            if (('/' === icon.slice(0, 1)) || ('http' === icon.slice(0, 4))) {
                return <img src={icon} alt={''} {...props} />;
            }
            if (size) return <MuiIcon {...props}  style={{ fontSize: size }}>{icon}</MuiIcon>;
            return <MuiIcon {...props}>{icon}</MuiIcon>;
        default:
            return icon;
    }
}

export interface IconProps {
    icon?: ReactNode,
    size?: number,
}

export default Icon