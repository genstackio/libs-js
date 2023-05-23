import { group_children, group_definition } from '../types';
import { WithChildren, WithItems } from '../withs';
import GroupInstance from './GroupInstance';

const defaultItems = [];

export function GroupInstances({
    children,
    items = defaultItems,
    templateModules,
    moduleProps,
    paddingMode,
}: GroupInstancesProps) {
    return (
        <>
            {items.map((g: group_definition, i: number) => (
                <GroupInstance
                    key={i}
                    {...g}
                    index={i}
                    total={items.length}
                    templateModules={templateModules}
                    moduleProps={moduleProps}
                    paddingMode={paddingMode}
                >
                    {children ? children(g, i) : ''}
                </GroupInstance>
            ))}
        </>
    );
}

export interface GroupInstancesProps extends WithChildren<group_children>, WithItems<group_definition> {
    templateModules: any;
    moduleProps?: any;
    paddingMode?: 'left' | 'right' | 'all' | 'none';
}

export default GroupInstances;
