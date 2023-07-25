import { ComponentType, useMemo } from 'react';
import { DynamicFormContextProvider } from '@genstackio/react-contexts/lib/contexts/DynamicFormContext';
import useForm from '@genstackio/react-admin-ui/lib/hooks/useForm';
import applyContext from '../utils/applyContext';
import Contents from '@genstackio/react-admin-ui/lib/molecules/Contents';

const defaultContext: any = {};
const defaultContent: any[] = [];

export function useDynForm(definition: any, view: string, props: any, context: any = defaultContext) {
    const value = useMemo(
        () => ({
            definition,
        }),
        [definition],
    );

    const name = definition?.edit?.name || 'form';

    const { Form, SubmitButton, field, form } = useForm(props, `dyn_${name}_${view}`);

    const options = useMemo(() => ({ field, SubmitButton }), [field, SubmitButton]);

    const { content = defaultContent } =
        useMemo(() => applyContext((value.definition || {})[view] || {}, context), [view, value, context]) || {};

    const DynForm = useMemo(
        () =>
            ({ children, dynChildren }: any) =>
                (
                    <DynamicFormContextProvider value={value}>
                        <Form customChildren={children} className={'w-full'}>
                            <Contents content={content} options={options} />
                            {!!dynChildren && dynChildren({ options, value })}
                        </Form>
                    </DynamicFormContextProvider>
                ),
        [value, Form, content, options],
    );

    const state = useMemo(
        () => ({
            isSubmitting: false,
        }),
        [],
    );

    return useMemo(
        () => [form.rhf.handleSubmit, DynForm, state, { isSubmitting: false }],
        [form.rhf.handleSubmit, DynForm, state],
    ) as [
        Function,
        ComponentType<any>,
        {
            isSubmitting: boolean;
        },
        any,
    ];
}

export default useDynForm;
