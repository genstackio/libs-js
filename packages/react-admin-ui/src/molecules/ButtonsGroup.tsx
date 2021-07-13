import clsx from 'clsx';
import Button from '../atoms/Button';
import { action_item } from '../types';
import { WithClassName } from '../withs';

export function ButtonsGroup({ className, actions = [] }: ButtonsGroupProps) {
    return (
        <div className={clsx('x-buttons', className)}>
            {actions.map(({ color, variant, target, label, icon }, i) => (
                <div key={i} className={'xs:mt-2 xs:w-full'}>
                    <Button color={color} variant={variant} onClick={target} icon={icon}>
                        {label}
                    </Button>
                </div>
            ))}
        </div>
    );
}

export interface ButtonsGroupProps extends WithClassName {
    actions: action_item[];
}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroup;
