import Row from '../atoms/Row';
import Breadcrumb from '../molecules/Breadcrumb';
import { AsComponent } from '../as';
import { WithColorOfBox, WithItemsOfScreenHeader } from '../withs';

const defaultItems = [];

export function ScreenHeader({ className, color = 'primary', items = defaultItems }: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;

    return (
        <Row center responsive={false} spaced className={className}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb color={color} items={items} toRight />
        </Row>
    );
}

export interface ScreenHeaderProps extends AsComponent, WithColorOfBox, WithItemsOfScreenHeader {}

// noinspection JSUnusedGlobalSymbols
export default ScreenHeader;
