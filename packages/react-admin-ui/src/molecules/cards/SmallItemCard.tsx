import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Cell from '../../atoms/Cell';
import Column from '../../atoms/Column';
import Rating from '../../atoms/Rating';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Div from '../../atoms/Div';
import Items from '../../atoms/Items';
import marginClass from '../../mappings/margins';
import { AsWrapper } from '../../as';
import { WithImage, WithTitle, WithClosable, WithBadges } from '../../withs';

export function SmallItemCard({
    badges,
    children,
    className,
    closable = false,
    image,
    rating,
    title,
}: SmallItemCardProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);

    if (!show) return null;

    return (
        <Column b={'xs'} flex relative className={clsx('border-disabled py-4 rounded-lg max-w-2xl', className)}>
            {closable && (
                <Icon icon={'close'} onClick={handleClick} className={'absolute top-2 right-2 cursor-pointer'} />
            )}
            {image && <Image {...image} className={clsx('object-none', marginClass('lg-x'))} />}
            <Cell col spacebetween>
                <Column spaced={2}>
                    <Text text={title} variant={'title6'} />
                    <Rating value={rating} />
                    <div>{children || ''}</div>
                </Column>
                {badges && (
                    <Div mx={'xmd'} mt={'_sm'} spaced={30} className={'text-right'}>
                        <Items component={Badge} items={badges} />
                    </Div>
                )}
            </Cell>
        </Column>
    );
}

export interface SmallItemCardProps extends AsWrapper, WithImage, WithTitle, WithClosable, WithBadges {
    rating?: number;
}

// noinspection JSUnusedGlobalSymbols
export default SmallItemCard;
