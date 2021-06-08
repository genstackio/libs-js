import {image} from "../types";
import {Block, Image, Text} from "../atoms";
import {ReactNode} from "react";

export function MiniCard({image, title, children}: MiniCardProps) {
    return (
        <div className='w-2/3 rounded-2xl'>
            <Block padding='none'>
                {image && <div className='flex justify-center'><Image url={image.url} alt={image.alt}
                                                                      className='w-full rounded-t-2xl'/></div>}
                {children || ''}
                <div className='ml-8'><Text variant="title4" text={title}/></div>
            </Block>
        </div>
    );
}

export interface MiniCardProps {
    children?: ReactNode,
    image?: image,
    title?: string,
}

export default MiniCard