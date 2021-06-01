import {Table} from '../../src'
import {args, s} from "../utils";
import formatAmount from "../../src/utils/formatAmount";

export default {
    title: 'Molecules/Table',
    component: Table,
    argTypes: {
        items: args.items,
        columns: args.columns,
    },
}

const Template = args => <Table {...args} />;

export const basic = s(Template,  {
    items: [{a: 12, b: true, c: 'hello', d: 'test'}, {a: 13, b: false, c: 'world', d: 'invisible'}],
    columns: [{id: 'b', label: 'Checkbox'}, {id: 'c'}, {id: 'a', label: 'Colonne A', format: v => formatAmount(v, '€')}],
})

export const withBadge = s(Template,  {
    items: [{a: 12, b: true, c: 'hello'}, {a: 13, b: false, c: 'world'}],
    columns: [{id: 'c', format: 'badge'}, {id: 'a', label: 'Colonne A', format: v => formatAmount(v, 'EUR')}],
})