import {ReactNode} from "react";
import MuiIcon from '@material-ui/core/Icon';

export function Icon({icon, size = 20, ...props}) {
    switch (typeof icon) {
        case 'string':
            if (('/' === icon.slice(0, 1)) || ('http' === icon.slice(0, 4))) {
                return <img src={icon} alt="" {...props} />;
            }
            return size ? <MuiIcon {...props}  style={{ fontSize: size }}>{icon}</MuiIcon> : <MuiIcon {...props}>{icon}</MuiIcon>;
        default:
            return icon;
    }
}
export interface IconProps {
    icon?: string | ReactNode,
    size?: number,
}
export default Icon