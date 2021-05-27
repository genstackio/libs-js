import {ReactNode} from 'react';
import {BaseBlockProps, Block} from "../../atoms";
import {Gallery} from "../../molecules";

export function GalleryBlock({text, items=[], ...props}: GalleryBlockProps) {
    return (
        <Block {...props}>
            <div className={'flex justify-between items-center border-b-2 my-8'}>
                <div className={'flex-col my-8'}>
                    <h5 className={'flex-1 text-2xl'}>{text}</h5>
                </div>
            </div>
            <div className={''}>
                <Gallery items={items} />
            </div>
        </Block>
    );
}

export interface GalleryBlockProps extends BaseBlockProps {
    text?: ReactNode,
    items?: any[],
}

export default GalleryBlock