import Row from '../atoms/Row';
import Items from '../atoms/Items';
import ShareIcon from './ShareIcon';
import { AsBox } from '../as';
import { WithItemsOfShareIcons } from '../withs';

export function ShareIcons({ className, items = [], ...props }: ShareIconsProps) {
    if (!items.length) return null;

    return (
        <Row spaced={4} className={className}>
            <Items component={ShareIcon} items={items} {...props} />
        </Row>
    );
}

export interface ShareIconsProps extends AsBox, WithItemsOfShareIcons {}

// noinspection JSUnusedGlobalSymbols
export default ShareIcons;
