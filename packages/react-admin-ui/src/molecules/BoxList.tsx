import Items from '../atoms/Items';
import BoxListItem from '../atoms/BoxListItem';
import Panel, { PanelProps } from '../atoms/Panel';
import { WithItemsOfBoxList } from '../withs';

const defaultItems = [];

export function BoxList({ items = defaultItems, variant = 'filled', color = 'primary', ...props }: BoxListProps) {
    return (
        <Panel variant={variant} {...props}>
            <Items color={color} component={BoxListItem} items={items} variant={variant} />
        </Panel>
    );
}

export interface BoxListProps extends PanelProps, WithItemsOfBoxList {}

// noinspection JSUnusedGlobalSymbols
export default BoxList;
