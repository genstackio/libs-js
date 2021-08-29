import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import Divider from '../atoms/Divider';
import Block from '../atoms/Block';
import Cell from '../atoms/Cell';
import Column from '../atoms/Column';
import { NewsletterAction } from '../molecules/actions/NewsletterAction';
import useBlock from '../hooks/useBlock';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithButtonLabel, WithImage, WithText, WithTitle } from '../withs';

export function Newsletter({
    className,
    image,
    imageLeft = false,
    onAfterSubscribe,
    text,
    title,
    ...props
}: NewsletterProps) {
    const [bProps] = useBlock(props, { color: 'primary', className: 'flex-1 p-5 sm:p-20', elevation: 0 });

    return (
        <Row
            reverse={imageLeft}
            className={clsx('p-0 sm:p-5', imageLeft ? 'pr-20 md:pr-52' : 'pl-20 md:pl-52', className)}
        >
            <Block {...bProps}>
                {title && (
                    <Column center>
                        <Text center text={title} variant={'title6'} />
                        <Divider color={'warning'} size={'xs'} variant={'contained'} className={'w-1/4'} />
                    </Column>
                )}
                <Text center p={'xmd'} text={text} variant={'text'} />
                <NewsletterAction onSuccess={onAfterSubscribe} />
            </Block>
            <Cell>
                <Image contained {...image} />
            </Cell>
        </Row>
    );
}

export interface NewsletterProps extends AsComponent, WithImage, WithText, WithTitle, WithColorOfBox, WithButtonLabel {
    imageLeft?: flag;
    onAfterSubscribe?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default Newsletter;
