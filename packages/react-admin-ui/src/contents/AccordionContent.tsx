import Accordion, {AccordionProps} from "../molecules/Accordion";

export function AccordionContent(props: AccordionContentProps) {
    return (
        <Accordion {...props} />
    );
}

export interface AccordionContentProps extends AccordionProps {
}

export default AccordionContent;
