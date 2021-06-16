import Accordion from './Accordion';
import {Block, Text} from "../atoms";
import {menu_item, box_color, rich_text, accordion_variant} from "../types";
import clsx from "clsx";

export function Menu({items = [], title, text, color = 'primary', variant = 'light'}: MenuProps) {
    const hasSection = !!(title || text);
    return(
        <div>
            {hasSection && (
                <Block padding={'small'} elevation={0} color={color} className={'x-m-small bg-opacity-5'} variant={'contained'} corner={'rounded-small'}>
                    <Text text={title} color={color} variant={'section'} />
                    <Text text={text} color={'dark'} variant={'xsmall'} />
                </Block>
            )}
            <Accordion className={clsx('x-m-small', hasSection && 'mt-0')} items={items} color={color} variant={variant} expandIcon={'navigate_next'} />
        </div>
    );
}

export interface MenuProps {
    color?: box_color,
    items: menu_item[],
    title?: rich_text,
    text?: rich_text,
    variant?: accordion_variant,
}