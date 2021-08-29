import Text from './Text';
import Image from './Image';
import Column, { ColumnProps } from './Column';
import { WithTitle, WithImage, WithTarget, WithMaxLen } from '../withs';

export function AppWallItem({
    color,
    corner = 'rounded',
    image,
    maxLen = 12,
    size = 'sm',
    target,
    title,
    ...props
}: AppWallItemProps) {
    return (
        <Column corner={corner} hcenter onClick={target} size={size} {...props}>
            <Image corner={corner} {...image} />
            <Text color={color} ellipsis={'...'} mt={'xs'} maxLen={maxLen} text={title} variant={'description'} />
        </Column>
    );
}

export interface AppWallItemProps extends ColumnProps, WithImage, WithMaxLen, WithTitle, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default AppWallItem;
