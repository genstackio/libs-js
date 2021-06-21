import {Table} from '../../src'
import {args, s, a} from "../utils";
import formatAmount from "../../src/utils/formatAmount";

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
}

const Template = args => <Table {...args} />;

export const basic = s(Template,  {
    columns: [{id: 'b', label: 'Checkbox'}, {id: 'c', format: 'badge'}, {id: 'a', label: 'Colonne A', format: v => formatAmount(v, '€')}],
    items: [{id: 'azert234', a: 12, b: true, c: 'hello', d: 'test'}, {id: 123, a: 13, b: false, c: 'world', d: 'invisible'}, {id: 'wxcvbn456', a: 8, b: true, c: 'text', d: 'test'}, {id: 456, a: 100, b: false, c: 'word', d: 'invisible'}],
    color: 'primary',
    selection: true,
})

export const showcase = s(Template,  {
    columns: [
        {id: 'id', label: '#', width: 70},
        {id: 'firstname', label: 'FirstName'},
        {id: 'lastname', label: 'LastName'},
        {id: 'username', label: 'Username'},
        {id: 'role', label: 'Role'},
        {id: 'country', label: 'Country'}
    ],
    items: [
        {id: '1', firstname: 'Alexander', lastname: 'Orton', username: '@mdorton', role: 'admin', country: 'USA'},
        {id: '2', firstname: 'John Deo', lastname: 'Deo', username: '@johndeo', role: 'user', country: 'USA'},
        {id: '3', firstname: 'Randy Orton', lastname: 'the Bird', username: '@twitter', role: 'admin', country: 'UK'},
        {id: '4', firstname: 'Randy Mark', lastname: 'Ottandy', username: '@mdothe', role: 'user', country: 'AUS'},
        {id: '5', firstname: 'Ram Jacob', lastname: 'Thornton', username: '@twitter', role: 'admin', country: 'IND'},
    ],
})
