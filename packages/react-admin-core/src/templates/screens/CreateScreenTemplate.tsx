import {ComponentType, useCallback} from 'react';
import {useHistory} from "react-router-dom";

const defaultActionProps = {};

export function CreateScreenTemplate({name, action: CreateAction, pluralName, actionProps = defaultActionProps, ...rest}: CreateScreenTemplateProps) {
    const history = useHistory();
    const onSuccess = useCallback(
        (data) => {
            history.push(`/${pluralName || `${name}s`}/${data.data[`create${name.slice(0, 1).toUpperCase()}${name.slice(1)}`].id}`);
        },
        [history, name, pluralName],
    );
    return (
        <CreateAction onSuccess={onSuccess} className={'w-full'} name={name} pluralName={pluralName} {...actionProps} {...rest} />
    );
}

export interface CreateScreenTemplateProps {
    name: string;
    pluralName?: string;
    breadcrumbs?: any;
    actionProps?: any;
    action: ComponentType<{onSuccess: Function, className?: string, [key: string]: any}>;
}

export default CreateScreenTemplate