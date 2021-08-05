import CreateTokenForm, { CreateTokenFormProps } from '../../forms/crud/CreateTokenForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import { WithMutationName } from '../../../withs';

export function CreateTokenAction({
    component: Component = CreateTokenForm,
    mutationName = 'CREATE_TOKEN',
    onSuccess,
    prepare,
    ...props
}: CreateTokenActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} defaultValues={{}} {...props} />;
}

export interface CreateTokenActionProps extends CreateTokenFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default CreateTokenAction;
