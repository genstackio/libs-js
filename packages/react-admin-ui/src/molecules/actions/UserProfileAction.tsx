import UserProfileForm, {UserProfileFormProps} from "../forms/UserProfileForm";
import useAction from "../../hooks/useAction";

export function UserProfileAction(props: UserProfileActionProps) {
    const state = useAction('USER_PROFILE');
    return (
        <UserProfileForm {...state} {...props} />
    )
}
export interface UserProfileActionProps extends UserProfileFormProps {}

export default UserProfileAction
