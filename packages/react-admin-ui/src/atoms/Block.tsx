import clsx from 'clsx';
import Container from './Container';
import BlockHeader, { BlockHeaderProps } from './BlockHeader';
import BlockFooter, { BlockFooterProps } from './BlockFooter';
import BlockContent, { BlockContentProps } from './BlockContent';
import boxClass from '../mappings/boxs';
import { class_name } from '../types';
import elevationClass from '../mappings/elevations';
import hoverAnimationClass from '../mappings/hover-animations';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import useBox from '../hooks/useBox';
import { AsWrapper } from '../as';
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
    WithMargin,
} from '../withs';
import marginClass from '../mappings/margins';

const defaultButtons = [];

export function Block({
    active = false,
    btnLabel,
    buttons = defaultButtons,
    children,
    className,
    color = 'clear',
    contentClassName,
    corner = 'rounded',
    dropdownItems,
    elevation = 7,
    footerClassName,
    headerClassName,
    hoverable = false,
    hoverAnimation,
    icon,
    image,
    onClick,
    p = 'sl',
    m = 'none',
    subtitle,
    title,
    variant = 'filled',
}: BlockProps) {
    const v = active ? 'contained' : 'header-contained' === variant ? 'filled' : variant;
    const [box] = useBox({ color, variant: v });

    return (
        <BoxProvider value={box}>
            <Container
                bgImage={image}
                corner={corner}
                onClick={onClick}
                className={clsx(
                    'overflow-hidden relative flex flex-col',
                    elevationClass(elevation),
                    hoverAnimationClass(hoverAnimation),
                    marginClass(m),
                    boxClass({ color, variant: v, hoverable }),
                    className,
                )}
            >
                <BlockHeader
                    btnLabel={btnLabel}
                    color={color}
                    dropdownItems={dropdownItems}
                    icon={icon}
                    p={p}
                    subtitle={subtitle}
                    title={title}
                    variant={
                        active
                            ? 'contained'
                            : 'header-contained' === variant
                            ? 'contained'
                            : 'outlined' === variant
                            ? 'filled'
                            : variant
                    }
                    className={headerClassName}
                />
                <BlockContent
                    p={p}
                    color={color}
                    variant={
                        active
                            ? 'contained'
                            : 'header-contained' === variant
                            ? 'filled'
                            : 'outlined' === variant
                            ? 'filled'
                            : variant
                    }
                    className={contentClassName}
                >
                    {children}
                </BlockContent>
                <BlockFooter
                    buttons={buttons}
                    color={color}
                    p={p}
                    variant={
                        active
                            ? 'contained'
                            : 'header-contained' === variant
                            ? 'filled'
                            : 'outlined' === variant
                            ? 'filled'
                            : variant
                    }
                    className={footerClassName}
                />
            </Container>
        </BoxProvider>
    );
}

export interface BaseBlockProps
    extends AsWrapper,
        Omit<BlockHeaderProps, 'variant'>,
        Omit<BlockFooterProps, 'variant'>,
        Omit<BlockContentProps, 'variant'>,
        WithColorOfBox,
        WithVariantOfBlock,
        WithPadding,
        WithMargin,
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
