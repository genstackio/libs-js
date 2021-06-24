import {children, class_name, image, target} from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';

export function Container({ bgImage, bgColor, corner, className, children, onClick }: ContainerProps) {
    const style = {
        backgroundImage: bgImage ? 'url(' + bgImage.url + ')' : undefined,
        backgroundColor: bgColor ? bgColor : undefined,
    };
    let content = children || '';
    if (onClick) {
        if ('string' === typeof onClick) {
            content = <a href={onClick}>{content}</a>
            onClick = undefined;
        } else {
            ('function' !== typeof onClick) && (onClick = undefined);
        }
    }
    return (
        <div className={clsx(cornerClass(corner), className)} style={style} onClick={onClick as any}>
            {content}
        </div>
    );
}

export interface ContainerProps {
    corner?: corner;
    bgImage?: image;
    bgColor?: string;
    className?: class_name;
    children?: children;
    onClick?: target;
}

export default Container;
