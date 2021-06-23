import { Image, Text } from '../atoms';
import { box_color, image } from '../types';

export function CentralTemplate({ color = 'primary', image, message }: CentralTemplateProps) {
    return (
        <div className={'h-screen flex items-center'}>
            <div className={'text-center max-w-3xl mx-auto'}>
                {image && (
                    <div className={'flex justify-center'}>
                        <Image url={image.url} alt={image.alt} />
                    </div>
                )}
                <Text text={message} variant={'title5'} color={color} />
            </div>
        </div>
    );
}

export interface CentralTemplateProps {
    color?: box_color;
    image?: image;
    message: string;
}

export default CentralTemplate;
