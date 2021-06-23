import ChangePasswordForm, { ChangePasswordFormProps } from '../forms/ChangePasswordForm';
import useAction from '../../hooks/useAction';

export function ChangePasswordAction(props: ChangePasswordActionProps) {
    const state = useAction('CHANGE_PASSWORD');
    return <ChangePasswordForm {...state} {...props} />;
}

export type ChangePasswordActionProps = ChangePasswordFormProps;

export default ChangePasswordAction;
