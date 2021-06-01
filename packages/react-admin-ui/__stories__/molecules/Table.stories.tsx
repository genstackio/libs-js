import {Table} from '../../src'
import {args, s} from "../utils";
import formatAmount from "../../src/utils/formatAmount";

export default {
    title: 'Molecules/Table',
    component: Table,
    argTypes: {
        items: args.items,
        columns: args.columns,
        selection: args.selection,
        rowsPerPage: args.rowsPerPage,
    },
}

const Template = args => <Table {...args} />;

export const basic = s(Template,  {
    columns: [{id: 'b', label: 'Checkbox'}, {id: 'c', format: 'badge'}, {id: 'a', label: 'Colonne A', format: v => formatAmount(v, '€')}],
    items: [{a: 12, b: true, c: 'hello', d: 'test'}, {a: 13, b: false, c: 'world', d: 'invisible'}],
    selection: true,
    rowsPerPage: 3,
})