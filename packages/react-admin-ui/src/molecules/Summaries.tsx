import clsx from 'clsx';
import Div from '../atoms/Div';
import Items from '../atoms/Items';
import SummariesItem from '../atoms/SummariesItem';
import { AsComponent } from '../as';
import { WithItemsOfSummaries } from '../withs';

const defaultItems = [];

export function Summaries({ className, items = defaultItems }: SummariesProps) {
    if (!items.length) return null;

    return (
        <Div grid={items.length % 12} className={clsx(`grid-flow-col divide-x`, className)}>
            <Items component={SummariesItem} items={items.slice(0, 3)} />
        </Div>
    );
}

export interface SummariesProps extends AsComponent, WithItemsOfSummaries {}

// noinspection JSUnusedGlobalSymbols
export default Summaries;
