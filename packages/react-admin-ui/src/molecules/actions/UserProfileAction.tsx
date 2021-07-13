import UserProfileForm, { UserProfileFormProps } from '../forms/UserProfileForm';
import useAction from '../../hooks/useAction';
import FormActionProps from '../forms/FormActionProps';

export function UserProfileAction({ onSuccess, ...props }: UserProfileActionProps) {
    return <UserProfileForm {...useAction('USER_PROFILE', { onSuccess })} {...props} />;
}

export interface UserProfileActionProps extends UserProfileFormProps, FormActionProps {
    onSuccess?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default UserProfileAction;
