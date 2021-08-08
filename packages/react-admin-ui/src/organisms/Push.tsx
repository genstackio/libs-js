import clsx from 'clsx';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { flag } from '../types';
import { WithBox, WithButtonLabel, WithButtonTarget, WithImage, WithSubtitle, WithText, WithTitle } from '../withs';
import { Block } from '../atoms';
import { AsComponent } from '../as';

export function Push({
    className,
    title,
    subtitle,
    text,
    color = 'primary',
    variant = 'contained',
    btnLabel,
    btnTarget,
    imageLeft = false,
    image,
}: PushProps) {
    return (
        <Block color={color} variant={variant} className={className}>
            <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse')}>
                <div className={'flex-1 sm:flex-auto sm:p-5'}>
                    <Text className={'mb-2'} variant={'title3'} text={title} />
                    <Text variant={'subtitle'} text={subtitle} />
                    <Text className={'leading-loose py-3'} variant={'body'} text={text} />
                    {btnLabel && (
                        <Button className={'mt-4'} size={'lg'} corner={'circle'} onClick={btnTarget}>
                            {btnLabel}
                        </Button>
                    )}
                </div>
                {!!image && (
                    <div className={'flex-1 flex-1 mr-4'}>
                        <Image {...image} objectFit={'contain'} />
                    </div>
                )}
            </Row>
        </Block>
    );
}

export interface PushProps
    extends AsComponent,
        WithTitle,
        WithSubtitle,
        WithText,
        WithBox,
        WithImage,
        WithButtonLabel,
        WithButtonTarget {
    imageLeft?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Push;
