import { WithClassName, WithBox, WithItemsOfBoxList } from '../withs';
import Items from '../atoms/Items';
import Panel from '../atoms/Panel';
import BoxListItem from '../atoms/BoxListItem';

export function BoxList({ items = [], variant = 'filled', ...props }: BoxListProps) {
    return (
        <Panel vertical {...props} variant={variant}>
            <Items items={items} component={BoxListItem} />
        </Panel>
    );
}

export interface BoxListProps extends WithClassName, WithBox, WithItemsOfBoxList {}

export default BoxList;
