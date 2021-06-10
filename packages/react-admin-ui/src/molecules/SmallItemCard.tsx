import {ReactNode, useCallback, useState} from "react";
import Rating from "./Rating";
import {Badge, Icon, Image, Text} from "../atoms";
import {badge, image} from "../types";

export function SmallItemCard({badges, children, closable = false, image, rating, title }: SmallItemCardProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);
    if (!show) return null
    return(
        <div className={'relative flex border-1 border-gray-300 py-4 rounded-lg max-w-2xl'}>
            {closable && <Icon icon={'close'} onClick={handleClick} className={'absolute top-2 right-2 cursor-pointer'} />}
            {image && <Image url={image.url} alt={image.alt} className={'object-none mx-6'} />}
            <div className={'flex-1 flex flex-col justify-between'}>
                <div className={'space-y-2'}>
                    <Text text={title} variant={'title6'} />
                    <Rating value={rating} readOnly />
                    <div>{children || ''}</div>
                </div>
                {badges && <div className={'text-right space-x-2 mx-3 xs:space-y-2 xs:mt-2'}>
                    {badges.map(({variant, color, type, text}, index) => (
                        <Badge key={index} variant={variant} color={color} type={type} text={text} />
                    ))}
                </div>}
            </div>
        </div>
    )
}

export interface SmallItemCardProps {
    badges?: badge[],
    children?: ReactNode,
    closable?: boolean,
    image?: image,
    rating?: number,
    title?: string,
}

export default SmallItemCard