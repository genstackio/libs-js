import { args, s, a } from '../utils';
import Contents from '../../src/molecules/Contents';
import useForm from '../../src/hooks/useForm';
import {useMemo} from "react";

export default {
    title: 'Molecules/Contents',
    component: Contents,
    argTypes: a({
        items: args.items,
        color: args.color,
    }),
};

export const basic = s(
    (props) => {
        const { Form, field, SubmitButton } = useForm({});

        const options = useMemo(() => ({field, SubmitButton}), [field, SubmitButton]);
        return (
            <Form>
                <Contents {...props} options={options} />
            </Form>
        );
    },
    {
        content: [
            { type: 'form_field' },
            { type: 'text', text: 'Type "text" if you want to display an extra field below'},
            { type: 'form_field', name: 'number', if: 'text == "text"' },
        ],
    },
);
