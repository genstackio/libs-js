import Accordion, { AccordionProps } from '../molecules/Accordion';

export function AccordionContent(props: AccordionContentProps) {
    return <Accordion {...props} />;
}

export type AccordionContentProps = AccordionProps;

export default AccordionContent;
