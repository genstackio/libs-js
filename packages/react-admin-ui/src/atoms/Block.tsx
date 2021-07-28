import { useMemo } from 'react';
import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { block_variant, class_name, target } from '../types';
import Container from './Container';
import BlockHeader, { BlockHeaderProps } from './BlockHeader';
import BlockFooter, { BlockFooterProps } from './BlockFooter';
import BlockContent, { BlockContentProps } from './BlockContent';
import elevationClass from '../mappings/elevations';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import {
    WithBoxColor,
    WithChildren,
    WithClassName,
    WithImage,
    WithPadding,
    WithElevation,
    WithCorner,
    WithActive,
    WithHoverable,
} from '../withs';

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
    extends Omit<BlockHeaderProps, 'variant'>,
        Omit<BlockFooterProps, 'variant'>,
        BlockContentProps,
        WithClassName,
        WithChildren,
        WithBoxColor,
        WithPadding,
        WithElevation,
        WithCorner,
        WithActive,
        WithHoverable {
    headerClassName?: class_name;
    contentClassName?: class_name;
    footerClassName?: class_name;
    variant?: block_variant;
    onClick?: target;
    buttons?: any[];
}

export interface BlockProps extends BaseBlockProps, WithImage {}

export default Block;
