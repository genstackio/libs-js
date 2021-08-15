import { useMemo } from 'react';
import clsx from 'clsx';
import Button from './Button';
import Items from './Items';
import Row, { RowProps } from './Row';
import { WithButtons } from '../withs';

export function Buttons({
    btnClassName,
    btn2ClassName,
    btn3ClassName,
    btnType,
    btn2Type,
    btn3Type,
    btnLabel,
    btn2Label,
    btn3Label,
    btnTarget,
    btn2Target,
    btn3Target,
    btnIcon,
    btn2Icon,
    btn3Icon,
    btnEndIcon,
    btn2EndIcon,
    btn3EndIcon,
    btnColor,
    btn2Color,
    btn3Color,
    btnSize,
    btn2Size,
    btn3Size,
    btnCorner,
    btn2Corner,
    btn3Corner,
    ...props
}: ButtonsProps) {
    const items = useMemo(
        () =>
            [
                !!(btnLabel || btnIcon || btnEndIcon) && {
                    className: clsx('w-full sm:w-auto', btnClassName),
                    variant: btnType,
                    size: btnSize,
                    corner: btnCorner,
                    onClick: btnTarget,
                    label: btnLabel,
                    color: btnColor,
                    icon: btnIcon,
                    endIcon: btnEndIcon,
                },
                !!(btn2Label || btn2Icon || btn2EndIcon) && {
                    className: clsx('w-full sm:w-auto', btn2ClassName),
                    variant: btn2Type,
                    size: btn2Size,
                    corner: btn2Corner,
                    onClick: btn2Target,
                    label: btn2Label,
                    color: btn2Color,
                    icon: btn2Icon,
                    endIcon: btn2EndIcon,
                },
                !!(btn3Label || btn3Icon || btn3EndIcon) && {
                    className: clsx('w-full sm:w-auto', btn3ClassName),
                    variant: btn3Type,
                    size: btn3Size,
                    corner: btn3Corner,
                    onClick: btn3Target,
                    label: btn3Label,
                    color: btn3Color,
                    icon: btn3Icon,
                    endIcon: btn3EndIcon,
                },
            ].filter((x) => !!x),
        [
            btnClassName,
            btn2ClassName,
            btn3ClassName,
            btnType,
            btn2Type,
            btn3Type,
            btnLabel,
            btn2Label,
            btn3Label,
            btnTarget,
            btn2Target,
            btn3Target,
            btnIcon,
            btn2Icon,
            btn3Icon,
            btnEndIcon,
            btn2EndIcon,
            btn3EndIcon,
            btnColor,
            btn2Color,
            btn3Color,
            btnSize,
            btn2Size,
            btn3Size,
            btnCorner,
            btn2Corner,
            btn3Corner,
        ],
    );

    if (!items.length) return null;

    return (
        <Row spaced={2} {...props}>
            <Items component={Button} items={items} />
        </Row>
    );
}

export interface ButtonsProps extends RowProps, WithButtons {}

// noinspection JSUnusedGlobalSymbols
export default Buttons;
