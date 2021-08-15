import Accordion, { AccordionProps } from './Accordion';
import { WithItemsOfFaq } from '../withs';

export function Faq(props: FaqProps) {
    return <Accordion {...props} />;
}

export interface FaqProps extends Omit<AccordionProps, 'items'>, WithItemsOfFaq {}

// noinspection JSUnusedGlobalSymbols
export default Faq;
