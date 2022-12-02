import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';
import DateTimeField from "../../atoms/fields/DateTimeField";
import DateField from "../../atoms/fields/DateField";

export function ShowcaseForm({children, className, ...props}: ShowcaseFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'showcase');

    return (
        <Form customChildren={children} className={className}>
            <DateTimeField {...field} autoFocus required />
            <DateField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export interface ShowcaseFormProps extends BaseFormProps {
}

// noinspection JSUnusedGlobalSymbols
export default ShowcaseForm;
