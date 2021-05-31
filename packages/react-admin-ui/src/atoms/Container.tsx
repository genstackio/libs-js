import {ReactNode} from "react";
import {image} from "../types";

export function Container({bgImage, className, children}: ContainerProps) {
    const style = bgImage ? { backgroundImage: 'url('+bgImage.url+')'}:undefined
    return (
        <div className={className} style={style}>
            {children || ''}
        </div>
    );
}

export interface ContainerProps {
    bgImage?: image,
    className?: string,
    children?: ReactNode,
}

export default Container