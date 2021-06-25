import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { box_color, box_variant, padding, image, class_name, children, corner, target } from '../types';
import Container from './Container';
import BlockHeader, { BlockHeaderProps } from './BlockHeader';
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
}: BlockProps) {
    const box = useMemo(() => ({ color, variant }), [color, variant]);
    return (
        <BoxProvider value={box}>
            <Container
                corner={corner}
                bgImage={image}
                className={clsx(
                    className,
                    'relative flex flex-col',
                    elevationClass(elevation),
                    boxClass({ color, variant }),
                )}
                onClick={onClick}
            >
                <BlockHeader
                    title={title}
                    btnLabel={btnLabel}
                    dropdownItems={dropdownItems}
                    color={color}
                    variant={variant}
                    icon={icon}
                />
                <BlockContent padding={padding} className={contentClassName}>
                    {children || ''}
                </BlockContent>
            </Container>
        </BoxProvider>
    );
}

export interface BaseBlockProps extends BlockHeaderProps, BlockContentProps {
    children?: children;
    className?: class_name;
    contentClassName?: class_name;
    color?: box_color;
    padding?: padding;
    variant?: box_variant;
    elevation?: elevation;
    corner?: corner;
    onClick?: target;
}

export interface BlockProps extends BaseBlockProps {
    image?: image;
}

export default Block;
