import clsx from 'clsx';
import { Image } from '../atoms/Image';
import { WithImage, WithOverline, WithTitle } from '../withs';
import { flag } from '../types';
import { Text } from '../atoms/Text';
import Button, { ButtonProps } from '../atoms/Button';
import { AsComponent } from '../as';

export function QuoteSlide({ className, title, overline, image, noImage = false, button }: QuoteSlideProps) {
    return (
        <div className={clsx('flex flex-col items-center text-center', className)}>
            {!noImage && (
                <div className={clsx('w-16 h-16 mb-5', !image && 'bg-disabled')}>{image && <Image {...image} />}</div>
            )}
            <Text variant={'overline'} text={overline} />
            <Text variant={'title5'} text={title} />
            {button && <Button {...button} />}
        </div>
    );
}

export interface QuoteSlideProps extends AsComponent, WithImage, WithTitle, WithOverline {
    noImage?: flag;
    button?: ButtonProps;
}

// noinspection JSUnusedGlobalSymbols
export default QuoteSlide;
