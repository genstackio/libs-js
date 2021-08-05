import NewsletterForm, { NewsletterFormProps } from '../forms/NewsletterForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';
import { WithMutationName } from '../../withs';

export function NewsletterAction({
    component: Component = NewsletterForm,
    mutationName = 'SUBSCRIBE_NEWSLETTER',
    onSuccess,
    prepare,
    ...props
}: NewsletterActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}

export interface NewsletterActionProps extends NewsletterFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default NewsletterAction;
