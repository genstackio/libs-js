import clsx from 'clsx';
import { flag, image, target } from '../types';
import cornerClass from '../mappings/corners';
import Clickable from './Clickable';
import { WithChildren, WithClassName, WithCorner } from '../withs';

export function Container({
    bgImage,
    bgColor,
    corner,
    className,
    children,
    onClick,
    fullscreen = false,
}: ContainerProps) {
    const style = {
        backgroundImage: bgImage ? 'url(' + bgImage.url + ')' : undefined,
        backgroundColor: bgColor ? bgColor : undefined,
    };
    return (
        <Clickable
            className={clsx(cornerClass(corner), fullscreen && 'w-full absolute inset-0', className)}
            style={style}
            onClick={onClick as any}
        >
            {children || ''}
        </Clickable>
    );
}

export interface ContainerProps extends WithClassName, WithChildren, WithCorner {
    bgImage?: image;
    bgColor?: string;
    onClick?: target;
    fullscreen?: flag;
}

export default Container;
