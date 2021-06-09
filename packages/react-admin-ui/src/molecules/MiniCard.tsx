import {ReactNode} from "react";
import {image} from "../types";
import {Block, Image, Text} from "../atoms";

export function MiniCard({children, image, title}: MiniCardProps) {
    return (
        <div className={'w-2/3 rounded-2xl'}>
            <Block padding='none'>
                {image &&
                    <div className={'flex justify-center'}>
                        <Image className={'w-full rounded-t-2xl'} url={image.url} alt={image.alt} />
                    </div>}
                {children || ''}
                <div className={'ml-8'}><Text variant="title4" text={title}/></div>
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