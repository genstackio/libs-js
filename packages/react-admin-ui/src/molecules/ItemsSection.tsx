import BasicItemsSection from './itemssections/BasicItemsSection';
import SmallItemsSection from './itemssections/SmallItemsSection';
import FramedItemsSection from './itemssections/FramedItemsSection';
import SummaryItemsSection from './itemssections/SummaryItemsSection';
import { WithItems, WithLayoutOfItemsSection, WithTitle, WithDescription } from '../withs';

const layouts = {
    basic: BasicItemsSection,
    small: SmallItemsSection,
    framed: FramedItemsSection,
    summary: SummaryItemsSection,
};

export function ItemsSection({ layout = 'basic', ...props }: ItemsSectionProps) {
    const Component = layouts[layout || 'basic'] || layout['basic'];
    return <Component {...props} />;
}

export interface ItemsSectionProps extends WithTitle, WithDescription, WithLayoutOfItemsSection, WithItems {}

// noinspection JSUnusedGlobalSymbols
export default ItemsSection;
