import Button from '../atoms/Button';
import { WithIcon, WithItemsOfAction, WithLabel, WithTarget } from '../withs';
import { AsComponent } from '../as';

export function ButtonsGroupItem({ className, items = [], label, target, icon, ...props }: ButtonsGroupItemProps) {
    return (
        <div className={'xs:mt-2 xs:w-full'}>
            <Button icon={icon} className={'xs:w-full'} onClick={target} label={label} {...props} />
        </div>
    );
}

export interface ButtonsGroupItemProps extends AsComponent, WithItemsOfAction, WithIcon, WithLabel, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroupItem;
