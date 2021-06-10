import {Text, Icon} from "../atoms";

export function ItemSummary({date, author, likes, comments}: ItemSummaryProps) {

    return (
        <div className={'flex flex-wrap justify-start text-gray-400 space-x-8 xs:space-x-2 items-center'}>
            <div className={'flex items-center'}>
                    <Text text={new Date(date).toDateString()} variant={'subtitle'}/>
                    <div className={'ml-4'}>|</div>
            </div>
            <div className={'flex items-center space-x-2'}>
                    <Icon icon={'person'} size={20}/>
                    <Text text={author} variant={'subtitle'}/>
            </div>
            <div className={'flex items-center space-x-2'}>
                    <Icon icon={'thumb_up'} size={20}/>
                    <Text text={`${likes}`} variant={'subtitle'}/>
            </div>
            <div className={'flex items-center space-x-2'}>
                    <Icon icon={'question_answer'} size={20}/>
                    <Text text={`${comments}`} variant={'subtitle'}/>
            </div>
        </div>
    );
}

export interface ItemSummaryProps {
    date: number,
    author?: string,
    likes?: number,
    comments?: number,
}

export default ItemSummary