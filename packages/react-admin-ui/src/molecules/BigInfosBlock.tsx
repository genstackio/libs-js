import Block from '../atoms/Block';
import BigInfos, { BigInfosProps } from './BigInfos';
import { WithBox, WithHeadingText } from '../withs';
import { HeadingText } from '../atoms';
import { AsComponent } from '../as';

export function BigInfosBlock({ center, className, color, items, subtitle, title, variant }: BigInfosBlockProps) {
    return (
        <Block className={className} color={color} variant={variant} p={'_hl'}>
            <HeadingText center={center} subtitle={subtitle} title={title} variant={'medium'} />
            <BigInfos color={color} variant={variant} items={items} m={'_lg'} />
        </Block>
    );
}

export interface BigInfosBlockProps extends BigInfosProps, WithHeadingText, WithBox, AsComponent {}

export default BigInfosBlock;
