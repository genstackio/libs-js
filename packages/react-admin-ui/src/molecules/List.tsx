import clsx from 'clsx';
import Badge from '../atoms/Badge';
import boxClass from '../mappings/boxs';
import { AsComponent } from '../as';
import { WithBadge, WithColorOfBox, WithItemsOfList } from '../withs';

const defaultItems = [];

export function List({ badge: globalBadge, className, color: globalColor = 'clear', items = defaultItems }: ListProps) {
    return (
        <ul className={clsx('px-0', className)}>
            {items.map(({ color, text, badge }, index) => (
                <li
                    key={index}
                    className={clsx(
                        boxClass({ color: color || globalColor, variant: 'contained' }),
                        'border list-none rounded-sm px-3 py-3 flex justify-between',
                    )}
                >
                    {text || ''}
                    {(badge || globalBadge) && (
                        <Badge
                            color={badge?.color || globalBadge?.color}
                            text={badge?.text || globalBadge?.label}
                            variant={badge?.variant || globalBadge?.variant}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

export interface ListProps extends AsComponent, WithColorOfBox, WithBadge, WithItemsOfList {}

// noinspection JSUnusedGlobalSymbols
export default List;
