import {children, class_name, image} from "../types";

export function Container({bgImage, bgColor, className, children}: ContainerProps) {
    const style = {
        backgroundImage: (bgImage ? 'url('+bgImage.url+')' : undefined),
        backgroundColor: (bgColor ? bgColor : undefined),
    };
    return (
        <div className={className} style={style}>
            {children || ''}
        </div>
    );
}

export interface ContainerProps {
    bgImage?: image,
    bgColor?: string,
    className?: class_name,
    children?: children,
}

export default Container