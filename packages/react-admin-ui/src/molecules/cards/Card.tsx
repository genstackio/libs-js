import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Clickable from '../../atoms/Clickable';
import Image from '../../atoms/Image';
import Block from '../../atoms/Block';
import Tag from '../../atoms/Tag';
import Text from '../../atoms/Text';
import Rating from '../../atoms/Rating';
import { WithImage, WithContent, WithOnClick, WithValueAsNumber, WithHeadingText } from '../../withs';
import { AsBox } from '../../as';
import HeadingText from '../../atoms/HeadingText';
import useHeadingText from '../../hooks/useHeadingText';
import { useBlock } from '../../hooks';

export function Card({ image, title, description, content, value, link, onClick, ...props }: CardProps) {
    const [bProps, rest] = useBlock(props, { padding: 'none' });
    const [htProps] = useHeadingText(rest);
    const [isShown, setIsShown] = useState(false);
    const handleOpen = useCallback(() => setIsShown(true), [setIsShown]);
    const handleClose = useCallback(() => setIsShown(false), [setIsShown]);
    return (
        <Block {...bProps}>
            <div className={'w-full hover:opacity-60'} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <Image className={'rounded-t-2xl'} {...image} />
                <div className={clsx('w-full absolute top-0', !isShown && 'hidden')}>
                    <div className={'flex flex-inline justify-center mt-14 sm:mt-6'}>
                        <Clickable onClick={link}>
                            <Tag icon={'link'} color={props.color} variant={props.variant} size={'5xl'} />
                        </Clickable>
                        <Clickable onClick={onClick}>
                            <Tag icon={'system_update_alt'} color={props.color} variant={props.variant} size={'5xl'} />
                        </Clickable>
                    </div>
                </div>
            </div>
            <HeadingText {...htProps} variant={'smmd'} className={'p-10 border-b-2 mb-2'} />
            <div className="p-10 flex flex-inline justify-between items-center">
                <Text text={content} variant={'body'} />
                <Rating value={value} />
            </div>
        </Block>
    );
}

export interface CardProps extends AsBox, WithImage, WithHeadingText, WithContent, WithValueAsNumber, WithOnClick {
    link?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Card;
