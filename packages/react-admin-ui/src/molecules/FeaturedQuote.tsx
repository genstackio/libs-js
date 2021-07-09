import clsx from 'clsx';
import { class_name, image, rich_text, text_color } from '../types';
import { Avatar, Text } from '../atoms';


export function FeaturedQuote({ className, text, title, subtitle, image, color = 'primary' }: FeaturedQuoteProps) {
    return (
        <div className={clsx('flex flex-col items-center', className)}>
            <Text text={text} variant={'xsmall'} center={true} className={clsx('p-4 pt-7 flex-auto')}></Text>
            <Avatar name={title} image={image} size={'lg'} className={'pt-5'} />
            <Text text={title} variant={'section'} color={color} className={clsx('pt-3')}></Text>
            <Text text={subtitle} variant={'description'} className={clsx('pt-3 pb-5')}></Text>
        </div>
    );
}

export interface FeaturedQuoteProps {
    className?: class_name;
    text?: rich_text;
    title: string;
    subtitle?: rich_text;
    image?: image;
    color?: text_color;
}

export default FeaturedQuote;
