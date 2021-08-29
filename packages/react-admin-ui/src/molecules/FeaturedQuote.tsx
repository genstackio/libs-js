import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import Column from '../atoms/Column';
import { AsComponent } from '../as';
import { WithImage, WithSubtitle, WithText, WithColorOfText, WithTitle } from '../withs';

export function FeaturedQuote({ className, color = 'primary', image, subtitle, text, title }: FeaturedQuoteProps) {
    return (
        <Column center pb={'xmd'} className={className}>
            <Text center text={text} variant={'xsmall'} p={'md'} pt={'sl'} className={'flex-auto'} />
            <Avatar image={image} name={'string' === typeof title ? title : ''} size={'lg'} className={'pt-3'} />
            <Text color={color} text={title} pt={'xmd'} variant={'section'} />
            <Text text={subtitle} pt={'xmd'} variant={'description'} />
        </Column>
    );
}

export interface FeaturedQuoteProps
    extends AsComponent,
        WithText,
        WithTitle,
        WithSubtitle,
        WithImage,
        WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default FeaturedQuote;
