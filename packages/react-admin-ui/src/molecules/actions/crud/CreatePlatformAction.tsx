import CreatePlatformForm, { CreatePlatformFormProps } from '../../forms/crud/CreatePlatformForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreatePlatformAction({ onSuccess, ...props }: CreatePlatformActionProps) {
    return <CreatePlatformForm {...useAction('CREATE_PLATFORM', { onSuccess })} defaultValues={{}} {...props} />;
}

export interface CreatePlatformActionProps extends CreatePlatformFormProps, FormActionProps {}

// noinspection JSUnusedGlobalSymbols
export default CreatePlatformAction;
