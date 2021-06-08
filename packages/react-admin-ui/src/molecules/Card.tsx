import {Image, Block} from '../atoms';
import {Rating} from './';
import {image} from '../types';

export function Card({image, title, description, content, value}: CardProps) {
    return (
        <Block padding='none'>
            <Image className={'w-full rounded-t-2xl'} url={image.url} alt={image.alt}/>
            <div className={"p-10 border-b-2"}>
                <h6 className='mb-2 text-2xl text-bold'>{title}</h6>
                <p className={'mb-2'}>{description}</p>
            </div>
            <div className='p-10 flex flex-inline justify-between items-center'>
                <p>{content}</p>
                <Rating value={value}/>
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