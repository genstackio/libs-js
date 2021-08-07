import clsx from 'clsx';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import { WithClassName, WithImage, WithSubtitle, WithText, WithColorOfText, WithTitle } from '../withs';

export function FeaturedQuote({ className, text, title, subtitle, image, color = 'primary' }: FeaturedQuoteProps) {
    return (
        <div className={clsx('flex flex-col items-center', className)}>
            <Text text={text} variant={'xsmall'} center className={'p-4 pt-7 flex-auto'} />
            <Avatar name={'string' === typeof title ? title : ''} image={image} size={'lg'} className={'pt-5'} />
            <Text text={title} variant={'section'} color={color} className={'pt-3'} />
            <Text text={subtitle} variant={'description'} className={'pt-3 pb-5'} />
        </div>
    );
}

export interface FeaturedQuoteProps
    extends WithClassName,
        WithText,
        WithTitle,
        WithSubtitle,
        WithImage,
        WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default FeaturedQuote;
