import CreateUserForm, { CreateUserFormProps } from '../../forms/crud/CreateUserForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import { WithMutationName } from '../../../withs';

export function CreateUserAction({
    component: Component = CreateUserForm,
    mutationName = 'CREATE_USER',
    onSuccess,
    prepare,
    ...props
}: CreateUserActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}

export interface CreateUserActionProps extends CreateUserFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default CreateUserAction;
