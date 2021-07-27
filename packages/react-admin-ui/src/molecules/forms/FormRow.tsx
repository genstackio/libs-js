import FormItem from './FormItem';
import { form_item } from '../../types';

export function FormRow({ items }: FormRowProps) {
    return (
        <div
            className={
                'py-2 leading-tight focus:outline-none focus:shadow-outline flex inline xs:flex-col space-x-3 xs:space-x-0'
            }
        >
            {items.map((item, index) => (
                <FormItem key={index} definition={item} className={'flex-1'} />
            ))}
        </div>
    );
}

export interface FormRowProps {
    items: form_item[];
}

export default FormRow;