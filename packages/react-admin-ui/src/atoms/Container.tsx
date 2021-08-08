import clsx from 'clsx';
import { flag, image } from '../types';
import cornerClass from '../mappings/corners';
import Clickable from './Clickable';
import { WithCorner, WithOnClick } from '../withs';
import { AsWrapper } from '../as';

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

export interface ContainerProps extends AsWrapper, WithCorner, WithOnClick {
    bgImage?: image;
    bgColor?: string;
    fullscreen?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Container;
