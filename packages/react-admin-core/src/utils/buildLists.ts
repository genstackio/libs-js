import buildTypeMap from './buildTypeMap';

export function buildLists(types: any) {
    const typeMap = buildTypeMap(types);

    return (name: string): any => {
        let x = (typeMap[name] || {}).list;
        if (!x) x = {};

        return {
            columns: [{ id: 'id', label: 'column_id_label' }],
            globalActions: [],
            actions: [],
            ...x,
        };
    };
}

export default buildLists;
