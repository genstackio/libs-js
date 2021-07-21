import CreateUserForm, { CreateUserFormProps } from '../../forms/crud/CreateUserForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreateUserAction({ onSuccess, ...props }: CreateUserActionProps) {
    return <CreateUserForm {...useAction('CREATE_USER', { onSuccess })} {...props} />;
}

export interface CreateUserActionProps extends CreateUserFormProps, FormActionProps {}

export default CreateUserAction;
