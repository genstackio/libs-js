import clsx from 'clsx';
import { Badge, Clickable, HeadingText } from './';
import { WithActive, WithColorOfBox, WithDescription, WithDisabled, WithIndex, WithLabel, WithOnClick } from '../withs';
import { AsComponent } from '../as';

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
            <HeadingText title={label} subtitle={description} variant={'xxsmall'} color={color} />
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
