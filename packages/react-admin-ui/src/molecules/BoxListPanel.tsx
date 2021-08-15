import BoxList, { BoxListProps } from './BoxList';
import Column from '../atoms/Column';
import BoxHeader, { BoxHeaderProps } from './BoxHeader';

export function BoxListPanel({ items = [], onAddClick, title, ...props }: BoxListPanelProps) {
    return (
        <Column>
            <BoxHeader onAddClick={onAddClick} title={title} {...props} />
            <BoxList items={items} {...props} />
        </Column>
    );
}

export interface BoxListPanelProps extends BoxHeaderProps, BoxListProps {}

// noinspection JSUnusedGlobalSymbols
export default BoxListPanel;
