import { children, class_name, image, target } from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';
import Clickable from './Clickable';

export function Container({ bgImage, bgColor, corner, className, children, onClick }: ContainerProps) {
    const style = {
        backgroundImage: bgImage ? 'url(' + bgImage.url + ')' : undefined,
        backgroundColor: bgColor ? bgColor : undefined,
    };
    return (
        <Clickable className={clsx('w-full', cornerClass(corner), className)} style={style} onClick={onClick as any}>
            {children || ''}
        </Clickable>
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
