import clsx from 'clsx';
import { class_name, rich_text } from '../types';
import alignmentClass, { alignment } from '../mappings/alignments';

const textPositions = {
    left: 'border-l-4 p-4 blockquote',
    center: 'border-0',
    right: 'border-r-4 p-4 blockquote',
};
const titlePositions = {
    left: 'p-4 blockquote text-disabled',
    center: 'text-dark',
    right: 'p-4 blockquote text-disabled',
};

export function Quote({ className, position = 'left', text, title }: QuoteProps) {
    return (
        <blockquote className={clsx(className)}>
            {text && <p className={alignmentClass(position, textPositions)}>{text}</p>}
            {title && <p className={alignmentClass(position, titlePositions)}>- {title}</p>}
        </blockquote>
    );
}

export interface QuoteProps {
    className?: class_name;
    position?: alignment;
    text?: rich_text;
    title?: rich_text;
}

export default Quote;
