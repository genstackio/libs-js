import { Progress, Table } from '../../src';
import { args, s, a } from '../utils';
import formatAmount from '../../src/utils/formatAmount';
import { useCallback, useEffect, useState } from 'react';

export default {
    title: 'Molecules/Table',
    component: Table,
    argTypes: a({
        items: args.items,
        columns: args.columns,
        selection: args.selection,
        rowsPerPage: args.rowsPerPage,
        color: args.color,
        striped: args.striped,
    }),
};

const Template = (args) => <Table {...args} />;

const pages = [
    [
        { id: 'azert234', a: 12, b: true, c: 'hello', d: 'test', e: 88 },
        { id: 123, a: 13, b: false, c: 'world', d: 'invisible', e: 0 },
        { id: 'wxcvbn456', a: 8, b: true, c: 'text', d: 'test', e: 100 },
        { id: 456, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 450, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
    ],
    [
        { id: 451, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 452, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 453, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 454, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 455, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
    ],
    [
        { id: 456, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 457, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
        { id: 458, a: 100, b: false, c: 'word', d: 'invisible', e: 10 },
    ],
];
function getPage(n: number) {
    return pages[n] || [];
}
export const basic = s(
    (args) => {
        const [state, setState] = useState<any>({ data: undefined, loading: true, error: undefined, page: 0 });
        const handleOnPageChange = useCallback(
            (e) => {
                setState({ ...state, loading: true });
                setTimeout(() => {
                    setState({ loading: false, data: { items: getPage(e.page) } });
                }, 500);
            },
            [state, setState],
        );
        const handleColumnOrderChange = useCallback((e) => {
            alert(JSON.stringify(e, null, 4));
        }, []);
        useEffect(() => {
            setTimeout(() => {
                setState({ loading: false, data: { items: getPage(0) } });
            }, 250);
        }, []);
        const items = state.data?.items || [];
        return (
            <Template
                {...args}
                items={state.loading ? [] : items}
                onPageChange={handleOnPageChange}
                loading={state.loading}
                onColumnOrderChange={handleColumnOrderChange}
            />
        );
    },
    {
        columns: [
            { id: 'b', label: 'Checkbox' },
            { id: 'c', format: 'badge' },
            { id: 'a', label: 'Colonne A', format: (v) => formatAmount(v, '€') },
            {
                id: 'e',
                label: 'Progression',
                render: function SomeRenderer(v) {
                    return v > 0 ? <Progress value={v} /> : null;
                },
            },
        ],
        selection: true,
        defaultRowsPerPage: 5,
        total: 13,
    },
);

export const showcase = s(Template, {
    columns: [
        { id: 'id', label: '#', width: 70 },
        { id: 'firstname', label: 'FirstName' },
        { id: 'lastname', label: 'LastName' },
        { id: 'username', label: 'Username' },
        { id: 'role', label: 'Role' },
        { id: 'country', label: 'Country' },
    ],
    items: [
        { id: '1', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '2', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        { id: '3', firstname: 'Randy Orton', lastname: 'the Bird', username: '@twitter', role: 'admin', country: 'UK' },
        { id: '4', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '5', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
    ],
});
