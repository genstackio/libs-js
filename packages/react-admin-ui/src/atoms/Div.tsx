import { useMemo } from 'react';
import clsx from 'clsx';
import { box_color, box_variant, flag } from '../types';
import paddingClass, {
    paddingXClass,
    paddingYClass,
    paddingTopClass,
    paddingBottomClass,
    paddingLeftClass,
    paddingRightClass,
} from '../mappings/paddings';
import marginClass, {
    marginXClass,
    marginYClass,
    marginTopClass,
    marginBottomClass,
    marginLeftClass,
    marginRightClass,
} from '../mappings/margins';
import cornerClass from '../mappings/corners';
import spaceClass, { spaced } from '../mappings/spaces';
import borderClass, {
    borderBottomClass,
    borderLeftClass,
    borderRightClass,
    borderTopClass,
    borderXClass,
    borderYClass,
} from '../mappings/borders';
import boxSizeClass from '../mappings/box-sizes';
import shapeClass from '../mappings/shapes';
import gridColsClass from '../mappings/grid-cols';
import gapClass from '../mappings/gaps';
import colSpanClass, { col_span } from '../mappings/col-spans';
import bgClass from '../mappings/bgs';
import boxClass from '../mappings/boxs';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { AsWrapper } from '../as';
import {
    WithBorder,
    WithCenter,
    WithColorOfBox,
    WithCorner,
    WithMargin,
    WithWidth,
    WithHeight,
    WithNativeOnMouseEnter,
    WithNativeOnMouseLeave,
    WithNativeOnMouseOver,
    WithOnClick,
    WithPadding,
    WithShape,
    WithSizeOfBox,
    WithVariantOfBox,
} from '../withs';
import heightClass from '../mappings/heights';
import widthClass from '../mappings/widths';

export function Div({
    id = undefined,
    absolute = false,
    auto = false,
    b = 'none',
    bx = undefined,
    by = undefined,
    bt = undefined,
    bb = undefined,
    bl = undefined,
    br = undefined,
    box = undefined,
    center = false,
    children,
    className,
    col = undefined,
    color = undefined,
    corner = 'none',
    cropped = false,
    desktop = undefined,
    flex = false,
    flex1 = false,
    full = false,
    grid = false,
    gap = false,
    hcenter = false,
    hfull = false,
    hidden = false,
    hscreen = false,
    inline = false,
    m = 'none',
    mx = undefined,
    my = undefined,
    mt = undefined,
    mb = undefined,
    ml = undefined,
    mr = undefined,
    mobile = undefined,
    onClick,
    p = 'none',
    px = undefined,
    py = undefined,
    pt = undefined,
    pb = undefined,
    pl = undefined,
    pr = undefined,
    pointer = false,
    relative = false,
    responsive = false,
    reverse = false,
    row = undefined,
    selfcenter = false,
    shape = undefined,
    size = undefined,
    spacebetween = false,
    spaced = false,
    span = undefined,
    tablet = undefined,
    variant = undefined,
    vcenter = false,
    wrap = false,
    h = undefined,
    w = undefined,
}: DivProps) {
    if ('boolean' === typeof row) {
        col = !row;
    } else {
        col = 'undefined' === typeof col ? false : col;
    }
    flex = flex || flex1 || col || wrap;
    const bg = useMemo(() => color && variant && { color, variant }, [color, variant]);

    const cls = clsx(
        bg && bgClass(bg),
        box && boxClass(box),
        paddingClass(p),
        paddingXClass(px),
        paddingYClass(py),
        paddingTopClass(pt),
        paddingBottomClass(pb),
        paddingLeftClass(pl),
        paddingRightClass(pr),
        marginClass(m),
        marginXClass(mx),
        marginYClass(my),
        marginTopClass(mt),
        marginBottomClass(mb),
        marginLeftClass(ml),
        marginRightClass(mr),
        cornerClass(corner),
        spaceClass(spaced, { responsive, col }),
        borderClass(b),
        borderXClass(bx),
        borderYClass(by),
        borderTopClass(bt),
        borderBottomClass(bb),
        borderLeftClass(bl),
        borderRightClass(br),
        shapeClass(shape),
        boxSizeClass(size),
        !!h && heightClass(h),
        !!w && widthClass(w),
        grid && (true === grid ? 'grid' : `grid ${gridColsClass(grid as number)}`),
        gap && gapClass(true === gap ? 2 : (gap as number)),
        span && colSpanClass(span as number),
        vcenter && flex && 'items-center',
        hcenter && flex && 'text-center',
        center && flex && 'items-center justify-center',
        center && !flex && 'text-center',
        auto && 'w-full sm:w-auto',
        full && 'w-full',
        hfull && 'h-full',
        hidden && 'hidden',
        inline && (flex ? 'inline-flex' : 'inline-block'),
        relative && 'relative',
        absolute && 'absolute',
        flex1 && 'flex-1',
        wrap && 'flex-wrap',
        responsive && flex && col && 'flex flex-col',
        responsive && flex && !col && 'flex flex-col sm:flex-row',
        !responsive && flex && !col && 'flex',
        !responsive && flex && col && 'flex flex-col',
        hscreen && 'h-screen',
        mobile && !tablet && !desktop && `${inline ? 'inline-block' : 'block'} sm:hidden`,
        mobile && tablet && !desktop && `${inline ? 'inline-block' : 'block'} md:hidden`,
        !mobile && tablet && desktop && `hidden sm:${inline ? 'inline-block' : 'block'}`,
        !mobile && !tablet && desktop && `hidden md:${inline ? 'inline-block' : 'block'}`,
        reverse && col && 'flex-col-reverse',
        reverse && !col && 'flex-col-reverse sm:flex-row-reverse',
        (pointer || onClick) && 'cursor-pointer',
        selfcenter && 'self-center',
        spacebetween && 'justify-between',
        cropped && 'overflow-hidden',
        className,
    );

    const content = box ? <BoxProvider value={box as any}>{children || ''}</BoxProvider> : children || '';

    if (onClick) {
        if ('string' === typeof onClick) {
            return (
                <a href={onClick as string}>
                    <div id={id} className={cls}>
                        {content}
                    </div>
                </a>
            );
        }

        return (
            <div id={id} onClick={onClick as any} className={cls}>
                {content}
            </div>
        );
    }

    return (
        <div id={id} className={cls}>
            {content}
        </div>
    );
}

export interface DivProps
    extends AsWrapper,
        WithPadding,
        WithWidth,
        WithHeight,
        WithOnClick,
        WithNativeOnMouseEnter,
        WithNativeOnMouseOver,
        WithNativeOnMouseLeave,
        WithMargin,
        WithBorder,
        WithShape,
        WithCenter,
        WithCorner,
        WithSizeOfBox,
        WithColorOfBox,
        WithVariantOfBox {
    box?: { color?: box_color; variant?: box_variant };
    full?: flag;
    hfull?: flag;
    inline?: flag;
    cropped?: flag;
    absolute?: flag;
    relative?: flag;
    flex?: flag;
    grid?: boolean | number;
    gap?: boolean | number;
    col?: flag;
    auto?: flag;
    row?: flag;
    spaced?: spaced;
    span?: col_span;
    flex1?: flag;
    wrap?: flag;
    responsive?: flag;
    vcenter?: flag;
    hcenter?: flag;
    hscreen?: flag;
    desktop?: flag;
    tablet?: flag;
    mobile?: flag;
    reverse?: flag;
    pointer?: flag;
    selfcenter?: flag;
    spacebetween?: flag;
    hidden?: flag;
    id?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Div;
