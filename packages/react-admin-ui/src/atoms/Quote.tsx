import { rich_text } from '../types';
import alignmentClass, { alignment } from '../mappings/alignments';

const textPositions = {
    left: 'border-l-4 p-4 blockquote',
    center: 'border-0',
    right: 'border-r-4 p-4 blockquote',
};
const titlePositions = {
    left: 'p-4 blockquote text-gray-400',
    center: 'text-gray-400',
    right: 'p-4 blockquote text-gray-400',
};

export function Quote({ position = 'left', text, title }: QuoteProps) {
    return (
        <div>
            <blockquote>
                {text && <p className={alignmentClass(position, textPositions)}>{text}</p>}
                {title && <p className={alignmentClass(position, titlePositions)}>- {title}</p>}
            </blockquote>
        </div>
    );
}

export interface QuoteProps {
    position?: alignment;
    text?: rich_text;
    title?: rich_text;
}

export default Quote;
