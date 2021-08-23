import clsx from 'clsx';
import { WithItemsOfSummaries } from '../withs';
import { AsComponent } from '../as';
import SummariesItem from '../atoms/SummariesItem';

export function Summaries({ className, items }: SummariesProps) {
    return items ? (
        <div className={clsx(`grid grid-flow-col grid-cols-${items.length} divide-x`, className)}>
            {items.slice(0, 3).map((item, index) => (
                <SummariesItem {...item} key={index} />
            ))}
        </div>
    ) : null;
}

export interface SummariesProps extends AsComponent, WithItemsOfSummaries {}

// noinspection JSUnusedGlobalSymbols
export default Summaries;
