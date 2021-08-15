import Div from '../atoms/Div';
import Button from '../atoms/Button';
import { AsComponent } from '../as';
import { WithIcon, WithItemsOfAction, WithLabel, WithTarget } from '../withs';

export function ButtonsGroupItem({ className, items = [], target, ...props }: ButtonsGroupItemProps) {
    return (
        <Div auto mt={'sm'}>
            <Button onClick={target} {...props} className={'w-full sm:w-auto'} />
        </Div>
    );
}

export interface ButtonsGroupItemProps extends AsComponent, WithItemsOfAction, WithIcon, WithLabel, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default ButtonsGroupItem;
