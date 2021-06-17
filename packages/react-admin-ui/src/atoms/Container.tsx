import {children, class_name, corner, image} from "../types";
import clsx from "clsx";

const corners = {
    'rounded': 'rounded-2xl',
    'top-rounded': 'rounded-t-2xl',
    'left-rounded': 'rounded-l-2xl',
    'rounded-small': 'rounded-xl',
    'top-rounded-small': 'rounded-t-xl',
    'left-rounded-small': 'rounded-l-xl',
    'square': '',
};

export function Container({bgImage, bgColor, corner = 'square', className, children}: ContainerProps) {
    const style = {
        backgroundImage: (bgImage ? 'url('+bgImage.url+')' : undefined),
        backgroundColor: (bgColor ? bgColor : undefined),
    };
    return (
        <div className={clsx(corners[corner], className)} style={style}>
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