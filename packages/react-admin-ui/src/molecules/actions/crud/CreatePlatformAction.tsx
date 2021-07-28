import CreatePlatformForm, { CreatePlatformFormProps } from '../../forms/crud/CreatePlatformForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreatePlatformAction({ component: Component = CreatePlatformForm, createQueryName = 'CREATE_PLATFORM', onSuccess, prepare, ...props }: CreatePlatformActionProps) {
    return <Component {...useAction(createQueryName, { onSuccess, prepare })} defaultValues={{}} {...props} />;
}

export interface CreatePlatformActionProps extends CreatePlatformFormProps, FormActionProps {
    createQueryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default CreatePlatformAction;
