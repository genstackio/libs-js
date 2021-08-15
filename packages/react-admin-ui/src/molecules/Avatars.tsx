import Items from '../atoms/Items';
import Avatar from '../atoms/Avatar';
import Div, { DivProps } from '../atoms/Div';
import { WithItemsOfAvatar } from '../withs';

export function Avatars({ items = [], ...props }: AvatarsProps) {
    return (
        <Div spaced={-4} {...props}>
            <Items component={Avatar} items={items} />
        </Div>
    );
}

export interface AvatarsProps extends DivProps, WithItemsOfAvatar {}

// noinspection JSUnusedGlobalSymbols
export default Avatars;
