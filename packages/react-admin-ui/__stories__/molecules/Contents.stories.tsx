import { args, s, a } from '../utils';
import Contents from '../../src/molecules/Contents';
import useForm from '../../src/hooks/useForm';

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
        const { Form, field } = useForm({});

        return (
            <Form>
                <Contents {...props} field={field} />
            </Form>
        );
    },
    {
        content: [{ type: 'form_field' }, { type: 'text', text: 'hello', if: 'text' }],
    },
);
