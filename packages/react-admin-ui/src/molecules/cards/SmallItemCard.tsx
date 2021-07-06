import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Rating from '../../atoms/Rating';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import { badge, children, class_name, flag, image, rich_text } from '../../types';

export function SmallItemCard({
    className,
    badges,
    children,
    closable = false,
    image,
    rating,
    title,
}: SmallItemCardProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);
    if (!show) return null;
    return (
        <div className={clsx('relative flex border-1 border-gray-300 py-4 rounded-lg max-w-2xl', className)}>
            {closable && (
                <Icon icon={'close'} onClick={handleClick} className={'absolute top-2 right-2 cursor-pointer'} />
            )}
            {image && <Image {...image} className={'object-none mx-6'} />}
            <div className={'flex-1 flex flex-col justify-between'}>
                <div className={'space-y-2'}>
                    <Text text={title} variant={'title6'} />
                    <Rating value={rating} />
                    <div>{children || ''}</div>
                </div>
                {badges && (
                    <div className={'text-right space-x-2 mx-3 xs:space-y-2 xs:mt-2'}>
                        {badges.map(({ variant, color, type, text }, index) => (
                            <Badge key={index} variant={variant} color={color} type={type} text={text} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export interface SmallItemCardProps {
    className?: class_name;
    badges?: badge[];
    children?: children;
    closable?: flag;
    image?: image;
    rating?: number;
    title?: rich_text;
}

export default SmallItemCard;
