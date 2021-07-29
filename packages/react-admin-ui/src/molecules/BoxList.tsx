import { box_list_item } from '../types';
import { WithClassName, WithBox } from '../withs';
import { Items, Panel } from '../atoms';
import BoxListItem from '../atoms/BoxListItem';

export function BoxList({ items = [], variant = 'filled', ...props }: BoxListProps) {
    return (
        <Panel vertical {...props} variant={variant}>
            <Items items={items} component={BoxListItem} />
        </Panel>
    );
}

export interface BoxListProps extends WithClassName, WithBox {
    items?: box_list_item[];
}

export default BoxList;
