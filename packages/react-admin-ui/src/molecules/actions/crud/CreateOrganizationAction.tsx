import CreateOrganizationForm, { CreateOrganizationFormProps } from '../../forms/crud/CreateOrganizationForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';

export function CreateOrganizationAction({ onSuccess, ...props }: CreateOrganizationActionProps) {
    const [user] = useUser();
    return (
        <CreateOrganizationForm
            {...useAction('CREATE_ORGANIZATION', { onSuccess })}
            defaultValues={{ owner: user?.id }}
            {...props}
        />
    );
}

export interface CreateOrganizationActionProps extends CreateOrganizationFormProps, FormActionProps {}

// noinspection JSUnusedGlobalSymbols
export default CreateOrganizationAction;
