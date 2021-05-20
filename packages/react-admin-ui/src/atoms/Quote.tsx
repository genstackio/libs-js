const variantsp1 = {
    left: 'border-l-4 p-4 blockquote',
    center: 'border-0 text-center',
    right: 'border-r-4 text-right p-4 blockquote',
}
const variantsp2 = {
    left: 'p-4 blockquote text-gray-400',
    right: 'p-4 blockquote text-right text-gray-400',
    center: 'text-center text-gray-400',
}

export function Quote({text, title, variant = 'left'}: QuoteProps) {
    return (
        <div>
            <blockquote>
                <p className={variantsp1[variant]}>{text}</p>
                <p className={variantsp2[variant]}>- {title}</p>
            </blockquote>
        </div>
    );
}

export interface QuoteProps {
    variant?: 'left' | 'center' | 'right',
    text?: string,
    title?: string,
}

export default Quote