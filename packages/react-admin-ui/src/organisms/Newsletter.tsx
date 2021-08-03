import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import Button from '../atoms/Button';
import EmailField from '../atoms/fields/EmailField';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { WithBoxColor, WithImage, WithText, WithTitle } from '../withs';
import { useTranslation } from 'react-i18next';
import Divider from '../atoms/Divider';
import Block from '../atoms/Block';

export function Newsletter({ title, text, btnLabel, imageLeft = false, image, color = 'primary' }: NewsletterProps) {
    const { t } = useTranslation();
    const { handleSubmit, register } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = useCallback(
        (data) => {
            //TODO: implement Api call
            setSuccess(true);
        },
        [setSuccess],
    );

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
                {success && (
                    <Text
                        variant={'text'}
                        className={'py-3 text-center'}
                        text={t('newsletter_success_msg')}
                        color={'success'}
                    />
                )}
                <div>
                    {btnLabel && (
                        <form className={'flex xs:flex-col items-center mt-3'} onSubmit={handleSubmit(onSubmit)}>
                            <EmailField required register={register} variant={'outlined'} className={'min-w-full'} />
                            <Button color={color} variant={'contained'} className={'w-auto xs:w-full mt-4'}>
                                {btnLabel}
                            </Button>
                        </form>
                    )}
                </div>
            </Block>
            <div className={'flex-1'}>{image && <Image {...image} objectFit={'contain'} />}</div>
        </Row>
    );
}

export interface NewsletterProps extends WithImage, WithText, WithTitle, WithBoxColor {
    imageLeft?: boolean;
    btnLabel?: rich_text;
}

export default Newsletter;
