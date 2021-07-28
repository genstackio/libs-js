import UserProfileForm, { UserProfileFormProps } from '../forms/UserProfileForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function UserProfileAction({
    component: Component = UserProfileForm,
    queryName = 'USER_PROFILE',
    onSuccess,
    prepare,
    ...props
}: UserProfileActionProps) {
    return <Component {...useAction(queryName, { onSuccess, prepare })} {...props} />;
}

export interface UserProfileActionProps extends UserProfileFormProps, FormActionProps {
    onSuccess?: Function;
    queryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default UserProfileAction;
