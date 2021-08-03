import NewsletterForm, { NewsletterFormProps } from '../forms/NewsletterForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function NewsletterAction({
    component: Component = NewsletterForm,
    queryName = 'ADD_TO_NEWSLETTER',
    onSuccess,
    prepare,
    ...props
}: NewsletterActionProps) {
    return <Component {...useAction(queryName, { onSuccess, prepare })} {...props} />;
}

export interface NewsletterActionProps extends NewsletterFormProps, FormActionProps {
    onSuccess?: Function;
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default NewsletterAction;
