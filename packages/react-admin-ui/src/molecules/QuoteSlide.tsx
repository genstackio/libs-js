import clsx from 'clsx';
import { Image } from '../atoms/Image';
import { WithImage, WithTitle } from '../withs';
import { rich_text, flag } from '../types';
import { Text } from '../atoms/Text';
import { ButtonProps, Button } from '../atoms/Button';


export function QuoteSlide({ title, overline, image, noImage = false, button, ...props }: QuoteSlideProps) {
    return (
        <div className={clsx('flex flex-col items-center text-center')}>
            {!noImage && (
                <div className={clsx('w-16 h-16 mb-5', !image && 'bg-disabled')}>{image && <Image {...image} />}</div>
            )}
            <Text variant={'overline'} text={overline} />
            <Text variant={'title5'} text={title} />
            {button && <Button {...button} />}
        </div>
    );
}

export interface QuoteSlideProps extends WithImage, WithTitle {
    noImage?: flag;
    overline?: rich_text;
    button?: ButtonProps;
}

export default QuoteSlide;
