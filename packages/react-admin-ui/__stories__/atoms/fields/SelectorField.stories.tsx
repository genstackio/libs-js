import { args, s, a } from '../../utils';
import { SelectorField } from '../../../src';
import { useForm } from 'react-hook-form';
import stopPrevent from '../../../src/utils/stopPrevent';
import Button from '../../../src/atoms/Button';
import clsx from 'clsx';

export default {
    title: 'Atoms/fields/SelectorField',
    component: SelectorField,
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
        rows: args.rows,
        kind: args._disabled,
    }),
};

const Template = (args) => {
    const { control, getValues } = useForm();
    return (
        <div className={'space-y-4'}>
            <SelectorField {...args} control={control} />
            <Button
                onClick={(e: any) => {
                    stopPrevent(e);
                    alert(JSON.stringify(getValues(), null, 4));
                }}
            >
                Show data
            </Button>
        </div>
    );
};

export const basic = s(Template, {
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
});

export const withDefaultValue = s(Template, {
    defaultValue: 3,
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
});
export const withImages = s(Template, {
    component: ({ value, selected, onClick }: any) => (
        <img
            className={clsx(
                'rounded w-20 cursor-pointer overflow-hidden border-2',
                selected ? 'border-primary' : 'hover:border-primary',
            )}
            src={value}
            alt={'image'}
            onClick={onClick}
        />
    ),
    wrapperClassName: 'flex flex-row gap-4',
    values: [
        {
            value: 'https://statics.gotombola.co/tenants/gotombola/images/patterns/webp/circles-dark.webp',
            label: 'Circles Dark',
        },
        { value: 'https://statics.gotombola.co/tenants/gotombola/images/patterns/webp/chevron.webp', label: 'Chevron' },
        { value: 'https://statics.gotombola.co/tenants/gotombola/images/patterns/webp/connect.webp', label: 'Connect' },
        { value: 'https://statics.gotombola.co/tenants/gotombola/images/patterns/png/wet_snow.png', label: 'Wet Snow' },
    ],
});

export const withMultiple = s(Template, {
    values: [
        { value: 1, label: 'First value' },
        {
            value: 2,
            label: (
                <p>
                    Second <b>value</b>
                </p>
            ),
        },
        { value: 3, label: 'Third value' },
    ],
    multiple: true,
});
