import CreateTokenForm, { CreateTokenFormProps } from '../../forms/crud/CreateTokenForm';
import useAction from '../../../hooks/useAction';
import FormActionProps from '../../forms/FormActionProps';

export function CreateTokenAction({ component: Component = CreateTokenForm, createQueryName = 'CREATE_TOKEN', onSuccess, prepare, ...props }: CreateTokenActionProps) {
    return <Component {...useAction(createQueryName, { onSuccess, prepare })} defaultValues={{}} {...props} />;
}

export interface CreateTokenActionProps extends CreateTokenFormProps, FormActionProps {
    createQueryName?: string;
}

// noinspection JSUnusedGlobalSymbols
export default CreateTokenAction;
