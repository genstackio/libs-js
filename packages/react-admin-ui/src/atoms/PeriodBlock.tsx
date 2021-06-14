import {rich_text} from "../types";

export function PeriodBlock({text, value}: PeriodBlockProps) {
    return (
        <div className={'h-24 border-r-2 border-gray-100 py-2 text-center'}>
            {text && <h5 className={'text-xl px-2 mb-2'}>{text}</h5>}
            {value && <h2 className={'text-4xl font-black'}>{value}</h2>}
        </div>
    );
}

export interface PeriodBlockProps {
    text?: rich_text,
    value?: rich_text,
}

export default PeriodBlock