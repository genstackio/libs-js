import EmailField from '../../atoms/fields/EmailField';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';

export function NewsletterForm({ ...props }: NewsletterFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'newsletter');

    return (
        <Form>
            <EmailField {...field} required className={'min-w-full'} />
            <SubmitButton className={'w-full sm:w-auto mt-4'} />
        </Form>
    );
}

export type NewsletterFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default NewsletterForm;
