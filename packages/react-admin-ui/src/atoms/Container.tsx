import { useMemo } from 'react';
import clsx from 'clsx';
import Clickable from './Clickable';
import { flag, image } from '../types';
import cornerClass from '../mappings/corners';
import { AsWrapper } from '../as';
import { WithCorner, WithOnClick } from '../withs';

export function Container({
    bgColor,
    bgImage,
    children,
    className,
    corner,
    fullscreen = false,
    onClick,
}: ContainerProps) {
    const style = useMemo(
        () => ({
            backgroundImage: bgImage ? 'url(' + bgImage.url + ')' : undefined,
            backgroundColor: bgColor ? bgColor : undefined,
        }),
        [bgImage, bgColor],
    );
    return (
        <Clickable
            onClick={onClick as any}
            style={style}
            className={clsx(cornerClass(corner), fullscreen && 'w-full absolute inset-0', className)}
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
