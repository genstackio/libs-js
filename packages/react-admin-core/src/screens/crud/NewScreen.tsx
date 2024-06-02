import { useMemo } from 'react';
import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import useQueryString from '../../hooks/useQueryString';

function useForcedData() {
    const qs = useQueryString();
    return useMemo(() => {
        const acc: Record<string, string> = {};
        qs.forEach((v: string, k: string) => {
            acc[k] = v;
        });
        return acc;
    }, [qs]);
}
export function NewScreen(props: NewScreenProps) {
    const { plural, singular, new: { action = true, props: extraProps = {} } = {} } = props;
    const actionComp = useComponent('action', action ? 'crud/create' : `${singular}/create_${singular}`);
    const Component = useComponent('screen_template', 'create');
    const forcedData = useForcedData();
    const forcedAttributes = useMemo(() => Object.keys(forcedData), [forcedData]);
    const forcedRequiredFields = useMemo(
        () => forcedAttributes.reduce((acc, k) => Object.assign(acc, { [k]: true }), {} as Record<string, boolean>),
        [forcedAttributes],
    );
    const forcedDisabledFields = useMemo(
        () => forcedAttributes.reduce((acc, k) => Object.assign(acc, { [k]: true }), {} as Record<string, boolean>),
        [forcedAttributes],
    );
    return (
        <Component
            {...props}
            action={actionComp}
            pluralName={plural}
            {...extraProps}
            defaultValues={forcedData}
            forcedRequiredFields={forcedRequiredFields}
            forceDisabledFields={forcedDisabledFields}
        />
    );
}

export interface NewScreenProps {
    name: string;
    singular: string;
    plural: string;
    new?: {
        action?: boolean;
        props?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default NewScreen;
