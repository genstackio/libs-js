import {Image} from '../atoms';

export function Gallery({items=[]}: GalleryProps) {
    return (
        <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>
            {items.map((item, index) => (
                <div className={'border-double border-4 rounded-md'} key={index}>
                    <Image className={'w-full'} url={item.url} alt={item.alt}/>
                </div>
            ))}
        </div>
    );
}

export interface GalleryProps {
    items?: any[],
}

export default Gallery