import { useMemo } from 'react';
import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { class_name } from '../types';
import Container from './Container';
import BlockHeader, { BlockHeaderProps } from './BlockHeader';
import BlockFooter, { BlockFooterProps } from './BlockFooter';
import BlockContent, { BlockContentProps } from './BlockContent';
import elevationClass from '../mappings/elevations';
import hoverAnimationClass from '../mappings/hover-animations';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import {
    WithColorOfBox,
    WithImage,
    WithPadding,
    WithElevation,
    WithCorner,
    WithActive,
    WithHoverable,
    WithHoverAnimation,
    WithOnClick,
    WithVariantOfBlock,
} from '../withs';
import { AsWrapper } from '../as';

export function Block({
    elevation = 1,
    corner = 'rounded',
    btnLabel,
    children,
    className,
    headerClassName,
    contentClassName,
    footerClassName,
    color = 'default',
    dropdownItems,
    icon,
    image,
    padding,
    title,
    subtitle,
    variant = 'filled',
    onClick,
    buttons = [],
    hoverable = false,
    hoverAnimation,
    active = false,
}: BlockProps) {
    const v = active ? 'contained' : 'header-contained' === variant ? 'filled' : variant;
    const box = useMemo(() => ({ color, variant: v }), [color, variant]);
    return (
        <BoxProvider value={box}>
            <Container
                corner={corner}
                bgImage={image}
                className={clsx(
                    'overflow-hidden relative flex flex-col',
                    elevationClass(elevation),
                    hoverAnimationClass(hoverAnimation),
                    boxClass({ color, variant: v, hoverable }),
                    className,
                )}
                onClick={onClick}
            >
                <BlockHeader
                    title={title}
                    subtitle={subtitle}
                    btnLabel={btnLabel}
                    dropdownItems={dropdownItems}
                    color={color}
                    variant={'header-contained' === variant ? 'contained' : variant}
                    icon={icon}
                    className={clsx(headerClassName)}
                />
                <BlockContent padding={padding} className={clsx(contentClassName)}>
                    {children || ''}
                </BlockContent>
                <BlockFooter
                    buttons={buttons}
                    color={color}
                    variant={'header-contained' === variant ? 'filled' : variant}
                    className={clsx(footerClassName)}
                />
            </Container>
        </BoxProvider>
    );
}

export interface BaseBlockProps
    extends AsWrapper,
        Omit<BlockHeaderProps, 'variant'>,
        Omit<BlockFooterProps, 'variant'>,
        BlockContentProps,
        WithColorOfBox,
        WithVariantOfBlock,
        WithPadding,
        WithElevation,
        WithCorner,
        WithActive,
        WithHoverable,
        WithOnClick,
        WithHoverAnimation {
    headerClassName?: class_name;
    contentClassName?: class_name;
    footerClassName?: class_name;
    buttons?: any[];
}

export interface BlockProps extends BaseBlockProps, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default Block;
