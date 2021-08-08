import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Clickable from '../../atoms/Clickable';
import Image from '../../atoms/Image';
import Block from '../../atoms/Block';
import Tag from '../../atoms/Tag';
import Text from '../../atoms/Text';
import Rating from '../../atoms/Rating';
import {
    WithBox,
    WithDescription,
    WithImage,
    WithTitle,
    WithContent,
    WithOnClick,
    WithValueAsNumber,
} from '../../withs';
import { AsComponent } from '../../as';

export function Card({
    className,
    image,
    title,
    description,
    content,
    value,
    link,
    color,
    variant,
    onClick,
}: CardProps) {
    const [isShown, setIsShown] = useState(false);
    const handleOpen = useCallback(() => {
        setIsShown(true);
    }, [setIsShown]);
    const handleClose = useCallback(() => {
        setIsShown(false);
    }, [setIsShown]);
    return (
        <Block padding={'none'} color={color} variant={variant} className={className}>
            <div className={'w-full hover:opacity-60'} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                <Image className={'rounded-t-2xl'} {...image} />
                <div className={clsx('w-full absolute top-0', !isShown && 'hidden')}>
                    <div className={'flex flex-inline justify-center mt-14 sm:mt-6'}>
                        <Clickable onClick={link}>
                            <Tag icon={'link'} color={color} variant={variant} size={'5xl'} />
                        </Clickable>
                        <Clickable onClick={onClick}>
                            <Tag icon={'system_update_alt'} color={color} variant={variant} size={'5xl'} />
                        </Clickable>
                    </div>
                </div>
            </div>
            {(title || description) && (
                <div className={'p-10 border-b-2'}>
                    <Text className={'mb-2'} variant={'title5'} text={title} />
                    <Text className={'mb-2'} variant={'description'} text={description} />
                </div>
            )}
            <div className="p-10 flex flex-inline justify-between items-center">
                <Text text={content} variant={'body'} />
                <Rating value={value} />
            </div>
        </Block>
    );
}

export interface CardProps
    extends AsComponent,
        WithBox,
        WithImage,
        WithTitle,
        WithDescription,
        WithContent,
        WithValueAsNumber,
        WithOnClick {
    link?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Card;
