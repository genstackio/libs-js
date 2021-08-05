import CreatePlatformForm, { CreatePlatformFormProps } from '../../forms/crud/CreatePlatformForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';
import { WithMutationName } from '../../../withs';

export function CreatePlatformAction({
    component: Component = CreatePlatformForm,
    mutationName = 'CREATE_PLATFORM',
    onSuccess,
    prepare,
    ...props
}: CreatePlatformActionProps) {
    return <Component {...useAction(mutationName, { onSuccess, prepare })} defaultValues={{}} {...props} />;
}

export interface CreatePlatformActionProps extends CreatePlatformFormProps, FormActionProps, WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default CreatePlatformAction;
