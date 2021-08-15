import UserProfileForm, { UserProfileFormProps } from '../forms/UserProfileForm';
import FormActionProps from '../forms/FormActionProps';
import useAction from '../../hooks/useAction';
import { WithMutationName } from '../../withs';

export function UserProfileAction({
    component: Component = UserProfileForm,
    mutationName = 'USER_PROFILE',
    onSuccess,
    prepare,
    ...props
}: UserProfileActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} />;
}

export interface UserProfileActionProps extends UserProfileFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default UserProfileAction;
