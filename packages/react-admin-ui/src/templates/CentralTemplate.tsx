import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import { AsComponent } from '../as';
import { WithColorOfBox, WithImage, WithMessage } from '../withs';

export function CentralTemplate({ className, color = 'primary', image, message }: CentralTemplateProps) {
    return (
        <Div center flex hscreen className={className}>
            <Div center mx={'auto'} className={'max-w-3xl'}>
                {image && (
                    <Div center flex>
                        <Image {...image} />
                    </Div>
                )}
                <Text color={color} text={message} variant={'title5'} />
            </Div>
        </Div>
    );
}

export interface CentralTemplateProps extends AsComponent, WithColorOfBox, WithImage, WithMessage {}

// noinspection JSUnusedGlobalSymbols
export default CentralTemplate;
