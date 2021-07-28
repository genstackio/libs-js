import CreateUserForm, { CreateUserFormProps } from '../../forms/crud/CreateUserForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreateUserAction({
    component: Component = CreateUserForm,
    createQueryName = 'CREATE_USER',
    onSuccess,
    prepare,
    ...props
}: CreateUserActionProps) {
    return <Component {...useAction(createQueryName, { onSuccess, prepare })} {...props} />;
}

export interface CreateUserActionProps extends CreateUserFormProps, FormActionProps {
    createQueryName?: string;
}

export default CreateUserAction;
