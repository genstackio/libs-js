import {ReactNode} from "react";
import MuiIcon from '@material-ui/core/Icon';
export function Icon({icon, ...props}) {
    switch (typeof icon) {
        case 'string':
            if (('/' === icon.slice(0, 1)) || ('http' === icon.slice(0, 4))) {
                return <img src={icon} alt="" {...props} />;
            }
            return <MuiIcon {...props}>{icon}</MuiIcon>;
        default:
            return icon;
    }
}
export interface IconProps {
    icon?: string | ReactNode,
}
export default Icon