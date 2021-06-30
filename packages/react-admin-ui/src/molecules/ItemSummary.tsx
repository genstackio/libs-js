import { Text, Icon } from '../atoms';
import { class_name, rich_text } from '../types';
import clsx from 'clsx';

export function ItemSummary({ className, date, author, likes, comments }: ItemSummaryProps) {
    return (
        <div
            className={clsx(
                'flex flex-wrap justify-start text-gray-400 space-x-8 xs:space-x-2 items-center',
                className,
            )}
        >
            <div className={'flex items-center'}>
                <Text text={new Date(date).toDateString()} variant={'subtitle'} />
                <div className={'ml-4'}>|</div>
            </div>
            <div className={'flex items-center space-x-2'}>
                <Icon icon={'person'} size={'lg'} />
                <Text text={author} variant={'subtitle'} />
            </div>
            <div className={'flex items-center space-x-2'}>
                <Icon icon={'thumb_up'} size={'lg'} />
                <Text text={`${likes}`} variant={'subtitle'} />
            </div>
            <div className={'flex items-center space-x-2'}>
                <Icon icon={'question_answer'} size={'lg'} />
                <Text text={`${comments}`} variant={'subtitle'} />
            </div>
        </div>
    );
}

export interface ItemSummaryProps {
    className?: class_name;
    date: number;
    author?: rich_text;
    likes?: number;
    comments?: number;
}

export default ItemSummary;
