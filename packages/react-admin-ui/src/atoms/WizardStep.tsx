import clsx from 'clsx';
import Badge from './Badge';
import Clickable from './Clickable';
import HeadingText from './HeadingText';
import { AsComponent } from '../as';
import { WithActive, WithColorOfBox, WithDescription, WithDisabled, WithIndex, WithLabel, WithOnClick } from '../withs';

export function WizardStep({
    active = false,
    className,
    color,
    description,
    disabled = false,
    index,
    label,
    onClick,
}: WizardStepProps) {
    active && (disabled = false);

    return (
        <Clickable
            onClick={onClick}
            className={clsx(
                'flex items-center space-x-4 cursor-pointer',
                disabled && 'cursor-not-allowed opacity-30',
                className,
            )}
        >
            <Badge
                color={color}
                text={index}
                type={'pill'}
                variant={active ? 'outlined' : 'contained'}
                className={'w-14 h-14 flex text-center justify-center items-center text-2xl'}
            />
            <HeadingText color={color} subtitle={description} title={label} variant={'xxsmall'} />
        </Clickable>
    );
}

export interface WizardStepProps
    extends AsComponent,
        WithLabel,
        WithDescription,
        WithActive,
        WithDisabled,
        WithOnClick,
        Required<WithIndex>,
        WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default WizardStep;
