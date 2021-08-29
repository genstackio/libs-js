import Row from '../../atoms/Row';
import Items from '../../atoms/Items';
import FormItem from './FormItem';
import { WithItemsOfFormRow } from '../../withs';

export function FormRow({ items = [] }: FormRowProps) {
    return (
        <Row inline py={'sm'} spaced={30} className={'leading-tight focus:outline-none focus:shadow-outline'}>
            <Items component={FormItem} itemProp={'definition'} items={items} className={'flex-1'} />
        </Row>
    );
}

export type FormRowProps = WithItemsOfFormRow;

// noinspection JSUnusedGlobalSymbols
export default FormRow;
