import clsx from 'clsx';
import Button from '../atoms/Button';
import { action_item, class_name } from '../types';

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

export interface ButtonsGroupProps {
    className?: class_name;
    actions: action_item[];
}

export default ButtonsGroup;
