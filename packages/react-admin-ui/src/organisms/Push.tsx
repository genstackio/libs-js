import clsx from 'clsx';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import { flag } from '../types';
import { WithButtonLabel, WithButtonTarget, WithImage, WithSubtitle, WithText, WithTitle } from '../withs';
import { HeadingText, Block } from '../atoms';
import { AsBox } from '../as';

export function Push({
    className,
    title,
    subtitle,
    text,
    color = 'primary',
    variant = 'filled',
    btnLabel,
    btnTarget,
    imageLeft = false,
    image,
}: PushProps) {
    return (
        <Block color={color} variant={variant} className={className}>
            <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse')}>
                <div className={'flex-1 sm:flex-auto sm:p-5'}>
                    <HeadingText
                        title={title}
                        subtitle={subtitle}
                        description={text}
                        titleClassName={'mb-2'}
                        descriptionClassName={'leading-loose py-3'}
                    />
                    <Button className={'mt-4'} size={'lg'} corner={'circle'} onClick={btnTarget} label={btnLabel} />
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
    extends AsBox,
        WithTitle,
        WithSubtitle,
        WithText,
        WithImage,
        WithButtonLabel,
        WithButtonTarget {
    imageLeft?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Push;
