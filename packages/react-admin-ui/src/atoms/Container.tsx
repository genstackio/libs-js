import {ReactNode} from "react";
import {image} from "../types";

export function Container({bgImage, children, className}: ContainerProps) {
    const style = bgImage ? { backgroundImage: 'url('+bgImage.url+')'}:undefined
    return (
        <div className={className} style={style}>
            {children || ''}
        </div>
    );
}

export interface ContainerProps {
    bgImage?: image,
    children?: ReactNode,
    className?: string,
}

export default Container