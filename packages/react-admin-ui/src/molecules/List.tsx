import Badge from '../atoms/Badge';
import clsx from 'clsx';
import { badge, box_color, list_item } from '../types';
import boxClass from '../utils/boxClass';

export function List({ badge: globalBadge, color: globalColor, items = [] }: ListProps) {
    return (
        <div>
            <ul className={'px-0'}>
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
                                variant={badge?.variant || globalBadge?.variant}
                                color={badge?.color || globalBadge?.color}
                                text={badge?.text || globalBadge?.label}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export interface ListProps {
    badge?: badge;
    color?: box_color;
    items?: list_item[];
}

export default List;
