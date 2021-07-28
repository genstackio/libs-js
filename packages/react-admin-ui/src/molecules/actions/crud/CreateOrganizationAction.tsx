import CreateOrganizationForm, { CreateOrganizationFormProps } from '../../forms/crud/CreateOrganizationForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';

export function CreateOrganizationAction({
    component: Component = CreateOrganizationForm,
    createQueryName = 'CREATE_ORGANIZATION',
    onSuccess,
    prepare,
    ...props
}: CreateOrganizationActionProps) {
    const [user] = useUser();
    return (
        <Component
            {...useAction(createQueryName, { onSuccess, prepare })}
            defaultValues={{ owner: user?.id }}
            {...props}
        />
    );
}

export interface CreateOrganizationActionProps extends CreateOrganizationFormProps, FormActionProps {
    createQueryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default CreateOrganizationAction;
