import { BasicItemsSection, SmallItemsSection } from './itemssections';
import { WithItems, WithLayoutOfItemsSection, WithTitle, WithDescription } from '../withs';

const layouts = {
    basic: BasicItemsSection,
    small: SmallItemsSection,
};

export function ItemsSection({ layout = 'basic', ...props }: ItemsSectionProps) {
    const Component = layouts[layout || 'basic'] || layout['basic'];
    return <Component {...props} />;
}

export interface ItemsSectionProps extends WithTitle, WithDescription, WithLayoutOfItemsSection, WithItems {}

// noinspection JSUnusedGlobalSymbols
export default ItemsSection;
