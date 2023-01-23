import { args, s, a } from '../../utils';
import { ImageField } from '../../../src';
import { useCallback, useState } from 'react';

export default {
    title: 'Atoms/fields/ImageField',
    component: ImageField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args.fieldValue,
        kind: args._disabled,
    }),
};

export const basic = s(
    (props) => {
        const [value, setValue] = useState<undefined | { url: string }>(undefined);
        const onChange = useCallback(
            (v: any) => {
                setValue(v);
            },
            [setValue],
        );
        return <ImageField {...props} onChange={onChange} value={value} />;
    },
    {
        getUploadParams: () => {
            return { url: 'https://httpbin.org/post' };
        },
    },
);
