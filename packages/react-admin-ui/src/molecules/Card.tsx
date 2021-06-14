import {Image, Block, Tag, Text} from '../atoms';
import {Rating} from './';
import {box_color, box_variant, image, rich_text, target} from '../types';
import {useCallback, useState} from "react";
import clsx from "clsx";

export function Card({image, title, description, content, value, link, color, variant, onClick}: CardProps) {
    const [isShown, setIsShown] = useState(false);
    const handleOpen = useCallback(() => {
        setIsShown(true);
    }, [setIsShown]);
    const handleClose = useCallback(() => {
        setIsShown(false);
    }, [setIsShown]);
    const target = useCallback (() => {
        ('function' === typeof onClick) && onClick();
        ('string' === typeof onClick) && (location.href = onClick);
    }, [onClick]);
    return (
        <Block padding={'none'} color={color} variant={variant}>
            <div className={'w-full hover:opacity-60'} onMouseEnter={handleOpen}
                 onMouseLeave={handleClose}>
                <Image className={'rounded-t-2xl'} {...image} />
                <div className={clsx('w-full absolute top-0', !isShown && 'hidden')}>
                    <div className={'flex flex-inline justify-center mt-14 sm:mt-6'}>
                        <a href={link}>
                            <Tag icon={'link'} color={color} variant={variant} size={40} />
                        </a>
                        <div onClick={target}>
                            <Tag icon={'system_update_alt'} color={color} variant={variant} size={40} />
                        </div>
                    </div>
                </div>
            </div>
            {(title || description) && (
                <div className={'p-10 border-b-2'}>
                    {title && <Text className={'mb-2'} variant={'title5'} text={title} color={color} />}
                    {description && <Text className={'mb-2'} variant={'description'} text={description} color={color} />}
                </div>
            )}
            <div className='p-10 flex flex-inline justify-between items-center'>
                {content && <Text color={color} text={content} variant={'body'} />}
                <Rating value={value} />
            </div>
        </Block>
    );
}

export interface CardProps {
    onClick?: target,
    color?: box_color,
    variant?: box_variant,
    icon?: string,
    link?: string,
    value?: number,
    image: image,
    title?: rich_text,
    description?: rich_text,
    content?: rich_text,
}

export default Card