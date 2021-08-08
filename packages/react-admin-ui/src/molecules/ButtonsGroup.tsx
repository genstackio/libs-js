import clsx from 'clsx';
import Button from '../atoms/Button';
import { WithItemsOfAction } from '../withs';
import { AsComponent } from '../as';

export function ButtonsGroup({ className, items = [] }: ButtonsGroupProps) {
    return (
        <div className={clsx('x-buttons', className)}>
            {items.map(({ label, target, ...props }, i) => (
                <div key={i} className={'xs:mt-2 xs:w-full'}>
                    <Button onClick={target} className={'xs:w-full'} {...props}>
                        {label}
                    </Button>
                </div>
            ))}
        </div>
    );
}

export interface ButtonsGroupProps extends AsComponent, WithItemsOfAction {}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroup;
