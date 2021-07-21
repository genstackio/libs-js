import CreateTokenForm, { CreateTokenFormProps } from '../../forms/crud/CreateTokenForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreateTokenAction({ onSuccess, ...props }: CreateTokenActionProps) {
    return <CreateTokenForm {...useAction('CREATE_TOKEN', { onSuccess })} defaultValues={{}} {...props} />;
}

export interface CreateTokenActionProps extends CreateTokenFormProps, FormActionProps {}

// noinspection JSUnusedGlobalSymbols
export default CreateTokenAction;
