import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { box_color, block_variant, padding, image, class_name, children, corner, target } from '../types';
import Container from './Container';
import BlockHeader, { BlockHeaderProps } from './BlockHeader';
import BlockFooter, { BlockFooterProps } from './BlockFooter';
import BlockContent, { BlockContentProps } from './BlockContent';
import elevationClass, { elevation } from '../mappings/elevations';
import { useMemo } from 'react';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';

export function Block({
    elevation = 1,
    corner = 'rounded',
    btnLabel,
    children,
    className,
    contentClassName,
    color = 'default',
    dropdownItems,
    icon,
    image,
    padding,
    title,
    variant = 'filled',
    onClick,
    buttons = [],
}: BlockProps) {
    const v = 'header-contained' === variant ? 'filled' : variant;
    const box = useMemo(() => ({ color, variant: v }), [color, variant]);
    return (
        <BoxProvider value={box}>
            <Container
                corner={corner}
                bgImage={image}
                className={clsx(
                    className,
                    'overflow-hidden relative flex flex-col',
                    elevationClass(elevation),
                    boxClass({ color, variant: v }),
                )}
                onClick={onClick}
            >
                <BlockHeader
                    title={title}
                    btnLabel={btnLabel}
                    dropdownItems={dropdownItems}
                    color={color}
                    variant={'header-contained' === variant ? 'contained' : variant}
                    icon={icon}
                />
                <BlockContent padding={padding} className={contentClassName}>
                    {children || ''}
                </BlockContent>
                <BlockFooter
                    buttons={buttons}
                    color={color}
                    variant={'header-contained' === variant ? 'filled' : variant}
                />
            </Container>
        </BoxProvider>
    );
}

export interface BaseBlockProps
    extends Omit<BlockHeaderProps, 'variant'>,
        Omit<BlockFooterProps, 'variant'>,
        BlockContentProps {
    children?: children;
    className?: class_name;
    contentClassName?: class_name;
    color?: box_color;
    padding?: padding;
    variant?: block_variant;
    elevation?: elevation;
    corner?: corner;
    onClick?: target;
    buttons?: any[];
}

export interface BlockProps extends BaseBlockProps {
    image?: image;
}

export default Block;
