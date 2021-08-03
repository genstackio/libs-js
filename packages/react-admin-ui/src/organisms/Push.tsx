import clsx from 'clsx';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { WithBox, WithImage, WithSubtitle, WithText, WithTitle } from '../withs';
import { Block } from '../atoms';

export function Push({
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
        <Block color={color} variant={variant}>
            <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse')}>
                <div className={'flex-1 sm:flex-auto sm:p-5'}>
                    {title && <Text className={'mb-2'} variant={'title3'} text={title} />}
                    {subtitle && <Text className={''} variant={'subtitle'} text={subtitle} />}
                    {text && <Text className={'leading-loose py-3'} variant={'body'} text={text} />}
                    {btnLabel && (
                        <Button className={'mt-4'} size={'lg'} corner={'circle'} onClick={btnTarget}>
                            {btnLabel}
                        </Button>
                    )}
                </div>
                <div className={'flex-1 flex-1 mr-4'}>
                    <Image {...image} objectFit={'contain'} />
                </div>
            </Row>
        </Block>
    );
}

export interface PushProps extends WithTitle, WithSubtitle, WithText, WithBox, WithImage {
    imageLeft?: boolean;
    btnLabel?: rich_text;
    btnTarget?: string;
}

export default Push;
