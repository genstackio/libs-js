import BoxList, { BoxListProps } from './BoxList';
import BoxHeader, { BoxHeaderProps } from './BoxHeader';

export function BoxListPanel({ title, onAddClick, items = [], ...props }: BoxListPanelProps) {
    return (
        <>
            <BoxHeader title={title} onAddClick={onAddClick} {...props} />
            <BoxList items={items} {...props} />
        </>
    );
}

export interface BoxListPanelProps extends BoxHeaderProps, BoxListProps {}

// noinspection JSUnusedGlobalSymbols
export default BoxListPanel;
