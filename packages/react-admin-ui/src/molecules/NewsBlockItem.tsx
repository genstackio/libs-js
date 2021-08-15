import Div from '../atoms/Div';
import { AsComponent } from '../as';
import { WithFullText } from '../withs';

export function NewsBlockItem({ className, title, subtitle, description, content, center }: NewsBlockItemProps) {
    return (
        <Div b={'xs-b'} center={center} p={'_xl'} className={className}>
            <Div className={'font-semibold text-lg'}>{title}</Div>
            <Div className={'font-normal text-lg'}>{subtitle}</Div>
            <Div className={'font-semibold text-sm'}>{description}</Div>
            <Div className={'font-normal text-sm'}>{content}</Div>
        </Div>
    );
}

export interface NewsBlockItemProps extends AsComponent, WithFullText {}

// noinspection JSUnusedGlobalSymbols
export default NewsBlockItem;
