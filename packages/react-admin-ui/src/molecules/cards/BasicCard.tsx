import { image, rich_text, target } from '../../types';
import { BaseBlockProps, Block, Image, Text } from '../../atoms';

export function BasicCard({ description, image, title, ...props }: BasicCardProps) {
    return (
        <Block padding={'xsmall'} {...props}>
            {image && <Image className={'w-full'} {...image} />}
            <Text className={'my-4'} variant={'title4'} text={title} />
            <Text variant={'description'} text={description} />
        </Block>
    );
}

export interface BasicCardProps extends BaseBlockProps {
    description?: rich_text;
    image?: image;
    onClick?: target;
}

export default BasicCard;
