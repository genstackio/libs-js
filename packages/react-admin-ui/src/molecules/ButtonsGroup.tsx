import { Button } from '../atoms/Button';
import { action_item } from '../types';

export function ButtonsGroup({ actions = [] }: ButtonsGroupProps) {
    return (
        <div className={'x-buttons'}>
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
    actions: action_item[];
}

export default ButtonsGroup;
