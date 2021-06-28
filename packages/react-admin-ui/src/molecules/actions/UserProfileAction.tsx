import UserProfileForm, { UserProfileFormProps } from '../forms/UserProfileForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function UserProfileAction({ onSuccess, ...props }: UserProfileActionProps) {
    const state = useAction('USER_PROFILE', { onSuccess });
    return <UserProfileForm {...state} {...props} />;
}

export interface UserProfileActionProps extends UserProfileFormProps, FormActionProps {
    onSuccess?: Function;
}

export default UserProfileAction;
