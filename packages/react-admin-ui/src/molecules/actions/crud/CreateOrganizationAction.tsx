import CreateOrganizationForm, { CreateOrganizationFormProps } from '../../forms/crud/CreateOrganizationForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';
import { WithMutationName } from '../../../withs';

export function CreateOrganizationAction({
    component: Component = CreateOrganizationForm,
    mutationName = 'CREATE_ORGANIZATION',
    onSuccess,
    prepare,
    ...props
}: CreateOrganizationActionProps) {
    const [user] = useUser();
    return (
        <Component
            {...useAction(mutationName, { onSuccess, prepare })}
            defaultValues={{ owner: user?.id }}
            {...props}
        />
    );
}

export interface CreateOrganizationActionProps extends CreateOrganizationFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default CreateOrganizationAction;
