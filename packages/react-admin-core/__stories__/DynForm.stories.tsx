import { s, a } from './utils';
import useDynForm from '../src/hooks/useDynForm';
import { useCallback } from 'react';
import { Button } from '@genstackio/react-admin-ui';

export default {
    title: 'Misc/DynForm',
    component: () => null,
    argTypes: a({}),
};

function Template(args) {
    const [handleSubmit, DynForm, { isSubmitting }] = useDynForm(
        {
            view1: {
                content: ['$name', '$title', '$description'],
            },
        },
        'view1',
        {},
    );
    const onClick = useCallback(
        (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(async (data: any) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        alert(JSON.stringify(data, null, 4));
                        resolve(undefined);
                    }, 1000);
                });
            })();
        },
        [handleSubmit],
    );
    return (
        <div>
            <DynForm />
            <Button loading={isSubmitting} disabled={isSubmitting} onClick={onClick}>
                display data
            </Button>
        </div>
    );
}

export const basic = s(Template, {});
