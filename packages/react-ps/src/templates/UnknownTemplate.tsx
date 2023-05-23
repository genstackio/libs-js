import { dynamic_page_body_item_config } from '../types';
import { WithChildren, WithItems } from '../withs';

// noinspection JSUnusedLocalSymbols
export function UnknownTemplate(props: UnknownTemplateProps) {
    return <>UNKNOWN TEMPLATE</>;
}

export interface UnknownTemplateProps extends WithChildren, WithItems<dynamic_page_body_item_config> {}

export default UnknownTemplate;
