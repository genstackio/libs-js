import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { WithBoxColor, WithImage, WithText, WithTitle } from '../withs';
import Divider from '../atoms/Divider';
import Block from '../atoms/Block';
import { NewsletterAction } from '../molecules/actions/NewsletterAction';

export function Newsletter({ title, text, imageLeft = false, image, color = 'primary' }: NewsletterProps) {
    return (
        <Row
            className={clsx(
                'xs:flex-col',
                imageLeft && 'flex-row-reverse xs:flex-col-reverse',
                imageLeft ? 'pr-52 md:pr-20' : 'pl-52 md:pl-20',
                'sm:p-5',
            )}
        >
            <Block className={clsx('flex-1 p-20 sm:p-5')} color={color} elevation={0}>
                {title && (
                    <div className={'flex flex-col items-center'}>
                        <Text variant={'title6'} text={title} center={true} />
                        <Divider size={'xs'} variant={'contained'} color={'warning'} className={clsx('w-1/4')} />
                    </div>
                )}
                {text && <Text className={'py-3 text-center'} text={text} variant={'text'} />}
                <NewsletterAction></NewsletterAction>
            </Block>
            <div className={'flex-1'}>{image && <Image {...image} objectFit={'contain'} />}</div>
        </Row>
    );
}

export interface NewsletterProps extends WithImage, WithText, WithTitle, WithBoxColor {
    imageLeft?: boolean;
}

export default Newsletter;
