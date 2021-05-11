import React from 'react';
import Badge from '../atoms/Badge';

export function List({items=[], ...props}: ListProps) {
    return (
        <div>
            <ul className='px-0'>
            {items.map(({text}, index) => (
                <li key={index} className='border list-none rounded-sm px-3 py-3 flex justify-between'>{text} <Badge {...props} /></li>
            ))}
            </ul>
        </div>
    );
}

export interface ListProps {
    items?: any[],
}

export default List
