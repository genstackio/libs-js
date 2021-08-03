import useForm from '../../hooks/useForm';
import { BaseFormProps } from './BaseForm';
import { EmailField } from '../../atoms';

export function NewsletterForm({ ...props }: NewsletterFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'newsletter');

    return (
        <Form>
            <EmailField {...field} required className={'min-w-full'} />
            <SubmitButton className={'w-auto xs:w-full mt-4'} />
        </Form>
    );
}

export type NewsletterFormProps = BaseFormProps;

export default NewsletterForm;
