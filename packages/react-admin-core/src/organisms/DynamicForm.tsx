import { dynamic_form } from '@genstackio/react-contexts/lib/types';
import { useMemo } from 'react';
import { DynamicFormContextProvider } from '@genstackio/react-contexts/lib/contexts/DynamicFormContext';
import EditForm from '../forms/crud/EditForm';
import applyContext from '../utils/applyContext';

export function DynamicForm({ definition = {}, view = 'form', context, onSubmit }: DynamicFormProps) {
    const value = useMemo(
        () => ({
            definition,
        }),
        [definition],
    );

    const edit = useMemo(() => applyContext((value.definition || {})[view] || {}, context), [view, value, context]);

    return (
        <DynamicFormContextProvider value={value}>
            <EditForm name={`form_${view}`} edit={edit} onSubmit={onSubmit} />
        </DynamicFormContextProvider>
    );
}

export interface DynamicFormProps {
    id: string;
    definition?: dynamic_form;
    view?: string;
    onSubmit?: Function;
    context?: any;
}

// noinspection JSUnusedGlobalSymbols
export default DynamicForm;
