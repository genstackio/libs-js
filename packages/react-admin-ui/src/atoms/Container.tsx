import {children, class_name, image} from "../types";
import clsx from "clsx";
import cornerClass, {corner} from "../mappings/corners";

export function Container({bgImage, bgColor, corner, className, children}: ContainerProps) {
    const style = {
        backgroundImage: (bgImage ? 'url('+bgImage.url+')' : undefined),
        backgroundColor: (bgColor ? bgColor : undefined),
    };
    return (
        <div className={clsx(cornerClass(corner), className)} style={style}>
            {children || ''}
        </div>
    );
}

export interface ContainerProps {
    corner?: corner,
    bgImage?: image,
    bgColor?: string,
    className?: class_name,
    children?: children,
}

export default Container