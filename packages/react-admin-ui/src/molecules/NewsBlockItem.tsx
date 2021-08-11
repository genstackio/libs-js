import { WithFullText } from '../withs';
import clsx from 'clsx';
import { AsComponent } from '../as';

export function NewsBlockItem({ className, title, subtitle, description, content, center }: NewsBlockItemProps) {
    return (
        <div className={clsx('px-8 py-6 border-b-1 xs:px-4 xs:py-3', center && 'text-center', className)}>
            {title && <div className={'font-semibold text-lg'}>{title}</div>}
            {subtitle && <div className={'font-normal text-lg'}>{subtitle}</div>}
            {description && <div className={'font-semibold text-sm'}>{description}</div>}
            {content && <div className={'font-normal text-sm'}>{content}</div>}
        </div>
    );
}

export interface NewsBlockItemProps extends AsComponent, WithFullText {}

// noinspection JSUnusedGlobalSymbols
export default NewsBlockItem;
