import {alignment, rich_text} from '../types';

const positionsp1 = {
    left: 'border-l-4 p-4 blockquote',
    center: 'border-0 text-center',
    right: 'border-r-4 text-right p-4 blockquote',
}
const positionsp2 = {
    left: 'p-4 blockquote text-gray-400',
    right: 'p-4 blockquote text-right text-gray-400',
    center: 'text-center text-gray-400',
}

export function Quote({position = 'left', text, title}: QuoteProps) {
    return (
        <div>
            <blockquote>
                {text && <p className={positionsp1[position]}>{text}</p>}
                {title && <p className={positionsp2[position]}>- {title}</p>}
            </blockquote>
        </div>
    );
}

export interface QuoteProps {
    position?: alignment,
    text?: rich_text,
    title?: rich_text,
}

export default Quote