import clsx from 'clsx';
import { Badge, Clickable, Text } from './';
import {
    WithActive,
    WithColorOfBox,
    WithClassName,
    WithDescription,
    WithDisabled,
    WithIndex,
    WithLabel,
    WithOnClick,
} from '../withs';

export function WizardStep({
    className,
    index,
    label,
    description,
    active = false,
    disabled = false,
    onClick,
    color,
}: WizardStepProps) {
    active && (disabled = false);
    return (
        <Clickable
            className={clsx(
                'flex items-center space-x-4 cursor-pointer',
                disabled && 'cursor-not-allowed opacity-30',
                className,
            )}
            onClick={onClick}
        >
            <Badge
                type={'pill'}
                variant={active ? 'outlined' : 'contained'}
                color={color}
                text={index}
                className={'w-14 h-14 flex text-center justify-center items-center text-2xl'}
            />
            <div>
                <Text text={label} color={color} variant={'title6'} />
                <Text text={description} color={color} variant={'overline'} />
            </div>
        </Clickable>
    );
}

export interface WizardStepProps
    extends WithClassName,
        WithLabel,
        WithDescription,
        WithActive,
        WithDisabled,
        WithOnClick,
        Required<WithIndex>,
        WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default WizardStep;
