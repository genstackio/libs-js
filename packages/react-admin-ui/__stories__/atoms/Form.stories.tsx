import { args, s, a } from '../utils';
import { FirstNameField, Form, InstagramField, IpAddressField } from '../../src';

export default {
    title: 'Atoms/Form',
    component: Form,
    argTypes: a({
        children: args.text,
    }),
};

const Template = (args) => <Form {...args} />;

export const basic = s(Template, {
    children: (
        <>
            <InstagramField />, <IpAddressField />, <FirstNameField />
        </>
    ),
});
