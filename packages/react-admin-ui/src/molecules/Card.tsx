import {Image, Block} from '../atoms';
import {Rating} from './';
import {image} from '../types';

export function Card({image, title, description, content, value}: CardProps) {
    return (
        <Block>
            <Image className={'w-full mb-3'} url={image.url} alt={image.alt}/>
            <div className={"border-b-2"}>
                <h6 className='mb-2 text-2xl text-bold'>{title}</h6>
                <p className={'mb-4'}>{description}</p>
            </div>
            <div className='-mb-8 mt-4 flex flex-inline justify-between'>
                <p className='mt-2'>{content}</p>
                <div className='mt-2'>
                    <Rating value={value}/>
                </div>
            </div>
        </Block>
    );
}

export interface CardProps {
    value?: number,
    image: image,
    title?: string,
    description?: string,
    content?: string,
}

export default Card