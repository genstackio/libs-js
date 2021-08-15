import clsx from 'clsx';
import Row from '../atoms/Row';
import ItemSummaryItem from './ItemSummaryItem';
import ItemSummaryTitle from './ItemSummaryTitle';
import { rich_text } from '../types';
import { AsComponent } from '../as';

export function ItemSummary({ author, className, comments, date, likes }: ItemSummaryProps) {
    return (
        <Row vcenter wrap className={clsx('justify-start text-disabled space-x-2 sm:space-x-8', className)}>
            <ItemSummaryTitle text={new Date(date).toDateString()} />
            <ItemSummaryItem icon={'person'} text={author} />
            <ItemSummaryItem icon={'thumb_up'} text={String(likes)} />
            <ItemSummaryItem icon={'question_answer'} text={String(comments)} />
        </Row>
    );
}

export interface ItemSummaryProps extends AsComponent {
    date: number;
    author?: rich_text;
    likes?: number;
    comments?: number;
}

// noinspection JSUnusedGlobalSymbols
export default ItemSummary;
