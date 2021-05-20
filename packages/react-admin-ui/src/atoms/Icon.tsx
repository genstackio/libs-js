import {ReactNode} from "react";

export function Icon({icon, ...props}) {
    switch (typeof icon) {
        case 'string':
            return <img src={icon} {...props} />;
        default:
            return icon;
    }
}

export interface IconProps {
    icon?: string | ReactNode,
}

export default Icon