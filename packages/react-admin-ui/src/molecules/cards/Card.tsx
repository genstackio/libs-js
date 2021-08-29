import { useCallback, useState } from 'react';
import Clickable from '../../atoms/Clickable';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import Block from '../../atoms/Block';
import Tag from '../../atoms/Tag';
import Text from '../../atoms/Text';
import Rating from '../../atoms/Rating';
import HeadingText from '../../atoms/HeadingText';
import useBlock from '../../hooks/useBlock';
import useHeadingText from '../../hooks/useHeadingText';
import { AsBox } from '../../as';
import { WithImage, WithContent, WithOnClick, WithValueAsNumber, WithHeadingText } from '../../withs';

export function Card({ image, title, description, content, value, link, onClick, ...props }: CardProps) {
    const [bProps, rest] = useBlock(props, { p: 'none' });
    const [htProps] = useHeadingText(rest);
    const [isShown, setIsShown] = useState(false);
    const handleOpen = useCallback(() => setIsShown(true), [setIsShown]);
    const handleClose = useCallback(() => setIsShown(false), [setIsShown]);

    return (
        <Block {...bProps}>
            <Div full onMouseEnter={handleOpen} onMouseLeave={handleClose} className={'hover:opacity-60'}>
                <Image className={'rounded-t-2xl'} {...image} />
                <Div absolute full hidden={!isShown} className={'top-0'}>
                    <Div center flex inline className={'mt-6 sm:mt-14'}>
                        <Clickable onClick={link}>
                            <Tag color={props.color} icon={'link'} size={'5xl'} variant={props.variant} />
                        </Clickable>
                        <Clickable onClick={onClick}>
                            <Tag color={props.color} icon={'system_update_alt'} size={'5xl'} variant={props.variant} />
                        </Clickable>
                    </Div>
                </Div>
            </Div>
            <HeadingText variant={'smmd'} {...htProps} className={'p-10 border-b-2 mb-2'} />
            <Div center flex inline p={'sl'} spacebetween>
                <Text text={content} variant={'body'} />
                <Rating value={value} />
            </Div>
        </Block>
    );
}

export interface CardProps extends AsBox, WithImage, WithHeadingText, WithContent, WithValueAsNumber, WithOnClick {
    link?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Card;
