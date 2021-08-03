/*
import EmailField from "../../atoms/fields/EmailField";
import Button from "../../atoms/Button";

<form className={'flex xs:flex-col items-center mt-3'} onSubmit={handleSubmit(onSubmit)}>
    <EmailField required register={register} variant={'outlined'} className={'min-w-full'} />
    <Button color={color} variant={'contained'} className={'w-auto xs:w-full mt-4'}>
        {btnLabel}
    </Button>
</form>
*/
import useForm from '../../hooks/useForm';
import { BaseFormProps } from './BaseForm';
import { EmailField } from '../../atoms';

export function NewsletterForm({ ...props }: NewsletterFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'newsletter');

    return (
        <Form {...props}>
            <EmailField {...field} />
            <SubmitButton></SubmitButton>
        </Form>
    );
}

export type NewsletterFormProps = BaseFormProps;

export default NewsletterForm;
