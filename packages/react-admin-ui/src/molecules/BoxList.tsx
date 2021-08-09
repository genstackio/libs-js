import { WithItemsOfBoxList } from '../withs';
import Items from '../atoms/Items';
import Panel from '../atoms/Panel';
import BoxListItem from '../atoms/BoxListItem';
import { AsBox } from '../as';

export function BoxList({ items = [], variant = 'filled', ...props }: BoxListProps) {
    return (
        <Panel vertical {...props} variant={variant}>
            <Items items={items} component={BoxListItem} />
        </Panel>
    );
}

export interface BoxListProps extends AsBox, WithItemsOfBoxList {}

// noinspection JSUnusedGlobalSymbols
export default BoxList;
