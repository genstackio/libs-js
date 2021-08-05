import { AsComponent } from '../as';
import Button from './Button';
import Div from './Div';
import { WithButtons } from '../withs';
import { box_variant } from '../mappings/box-variants';
import clsx from 'clsx';

export function Buttons({
    className,
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
}: ButtonsProps) {
    return (
        <Div
            full
            className={clsx(
                'sm:grid sm:grid-cols-1 md:flex lg:flex xl:flex 2xl:flex md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-2',
                className,
            )}
        >
            <Button
                className={clsx('flex-grow-0 self-stretch sm:w-full sm:flex-col', btnClassName)}
                variant={btnType as box_variant}
                size={btnSize}
                corner={btnCorner}
                onClick={btnTarget}
                label={btnLabel}
                color={btnColor}
                icon={btnIcon}
                endIcon={btnEndIcon}
            />
            <Button
                className={clsx('flex-grow-0 self-stretch sm:w-full sm:flex-col', btn2ClassName)}
                variant={btn2Type as box_variant}
                size={btn2Size}
                corner={btn2Corner}
                onClick={btn2Target}
                label={btn2Label}
                color={btn2Color}
                icon={btn2Icon}
                endIcon={btn2EndIcon}
            />
            <Button
                className={clsx('flex-grow-0 self-stretch sm:w-full sm:flex-col', btn3ClassName)}
                variant={btn3Type as box_variant}
                size={btn3Size}
                corner={btn3Corner}
                onClick={btn3Target}
                label={btn3Label}
                color={btn3Color}
                icon={btn3Icon}
                endIcon={btn3EndIcon}
            />
        </Div>
    );
}

export interface ButtonsProps extends AsComponent, WithButtons {}

// noinspection JSUnusedGlobalSymbols
export default Buttons;
