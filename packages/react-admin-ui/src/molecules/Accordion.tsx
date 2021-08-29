import { ChangeEvent, useState, useCallback } from 'react';
import AccordionItem from './AccordionItem';
import Items from '../atoms/Items';
import useBox from '../hooks/useBox';
import { AsComponent } from '../as';
import {
    WithExpandIcon,
    WithItemsOfAccordion,
    WithColorOfText,
    WithVariantOfMenu,
    WithCornerOfAccordion,
} from '../withs';

export function Accordion({ className, expandIcon, items = [], ...props }: AccordionProps) {
    const [expanded, setExpanded] = useState<number | false>(false);
    const handleChange = useCallback(
        (panel: number) => (event: ChangeEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        },
        [setExpanded],
    );
    const [box, rest] = useBox(props, { color: 'primary', variant: 'contained' });

    return (
        <Items
            box={box}
            component={AccordionItem}
            container={!!className}
            containerClassName={className}
            current={expanded}
            expandIcon={expandIcon}
            items={items}
            onChangeFactory={handleChange}
            {...rest}
        />
    );
}

export interface AccordionProps
    extends AsComponent,
        WithColorOfText,
        WithItemsOfAccordion,
        WithCornerOfAccordion,
        WithVariantOfMenu,
        WithExpandIcon {}

// noinspection JSUnusedGlobalSymbols
export default Accordion;
