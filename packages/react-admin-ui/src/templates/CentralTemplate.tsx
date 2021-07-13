import clsx from 'clsx';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import { WithBoxColor, WithClassName, WithImage } from '../withs';

export function CentralTemplate({ className, color = 'primary', image, message }: CentralTemplateProps) {
    return (
        <div className={clsx('h-screen flex items-center', className)}>
            <div className={'text-center max-w-3xl mx-auto'}>
                {image && (
                    <div className={'flex justify-center'}>
                        <Image {...image} />
                    </div>
                )}
                <Text text={message} variant={'title5'} color={color} />
            </div>
        </div>
    );
}

export interface CentralTemplateProps extends WithClassName, WithBoxColor, WithImage {
    message: string;
}

// noinspection JSUnusedGlobalSymbols
export default CentralTemplate;
