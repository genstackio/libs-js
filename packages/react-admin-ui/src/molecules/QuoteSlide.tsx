import clsx from 'clsx';
import Div from '../atoms/Div';
import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';
import Column from '../atoms/Column';
import Button, { ButtonProps } from '../atoms/Button';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithImage, WithOverline, WithTitle } from '../withs';

export function QuoteSlide({ button, className, image, noImage = false, overline, title }: QuoteSlideProps) {
    return (
        <Column center className={clsx('text-center', className)}>
            {!noImage && (
                <Div mb={'xlg'} size={'sm'} className={clsx(!image && 'bg-disabled')}>
                    {image && <Image {...image} />}
                </Div>
            )}
            <Text text={overline} variant={'overline'} />
            <Text text={title} variant={'title5'} />
            {button && <Button {...button} />}
        </Column>
    );
}

export interface QuoteSlideProps extends AsComponent, WithImage, WithTitle, WithOverline {
    noImage?: flag;
    button?: ButtonProps;
}

// noinspection JSUnusedGlobalSymbols
export default QuoteSlide;
