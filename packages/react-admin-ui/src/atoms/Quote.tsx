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

export function Quote({text, title, position = 'left'}: QuoteProps) {
    return (
        <div>
            <blockquote>
                <p className={positionsp1[position]}>{text}</p>
                <p className={positionsp2[position]}>- {title}</p>
            </blockquote>
        </div>
    );
}

export interface QuoteProps {
    position?: 'left' | 'center' | 'right',
    text?: string,
    title?: string,
}

export default Quote