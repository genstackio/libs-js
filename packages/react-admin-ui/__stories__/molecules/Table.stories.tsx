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
            <Table
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

export const withoutSelection = s(
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
            <Table
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
        selection: false,
        defaultRowsPerPage: 5,
        total: 13,
    },
);

export const showcase = s(Table, {
    rowHeight: 40,
    columns: [
        { id: 'id', label: '#' },
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
        { id: '6', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '7', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        { id: '8', firstname: 'Randy Orton', lastname: 'the Bird', username: '@twitter', role: 'admin', country: 'UK' },
        { id: '9', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '10', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '11', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '12', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '13',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '14', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '15', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '16', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '17', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '18',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '19', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '20', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '21', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '22', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '23',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '24', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '25', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '26', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '27', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '28',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '29', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '30', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '31', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '32', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '33',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '34', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '35', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '36', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '37', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '38',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '39', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '40', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '41', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '42', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '43',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '44', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '45', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '46', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '47', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '48',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '49', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '50', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '51', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '52', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '53',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '54', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '55', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '56', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '57', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '58',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '59', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '60', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '61', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '62', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '63',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '64', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '65', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '66', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '67', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '68',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '69', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '70', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '71', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '72', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '73',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '74', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '75', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '76', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '77', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '78',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '79', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '80', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '81', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '82', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '83',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '84', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '85', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '86', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '87', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '88',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '89', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '90', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '91', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '92', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '93',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '94', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        { id: '95', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND' },
        { id: '96', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '97', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '98',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '99', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        {
            id: '100',
            firstname: 'Ram Jacob',
            lastname: 'Thornton',
            username: '@twitter',
            role: 'admin',
            country: 'IND',
        },
        { id: '101', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '102', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '103',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '104', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        {
            id: '105',
            firstname: 'Ram Jacob',
            lastname: 'Thornton',
            username: '@twitter',
            role: 'admin',
            country: 'IND',
        },
        { id: '106', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '107', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '108',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '109', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        {
            id: '110',
            firstname: 'Ram Jacob',
            lastname: 'Thornton',
            username: '@twitter',
            role: 'admin',
            country: 'IND',
        },
        { id: '111', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '112', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '113',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '114', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        {
            id: '115',
            firstname: 'Ram Jacob',
            lastname: 'Thornton',
            username: '@twitter',
            role: 'admin',
            country: 'IND',
        },
        { id: '116', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA' },
        { id: '117', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA' },
        {
            id: '118',
            firstname: 'Randy Orton',
            lastname: 'the Bird',
            username: '@twitter',
            role: 'admin',
            country: 'UK',
        },
        { id: '119', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS' },
        {
            id: '120',
            firstname: 'Ram Jacob',
            lastname: 'Thornton',
            username: '@twitter',
            role: 'admin',
            country: 'IND',
        },
    ],
});
