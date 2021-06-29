import { args, s, a } from '../utils';
import { BirthDateField, FirstNameField, FormFooter, UsernameField } from '../../src';

export default {
    title: 'Atoms/FormFooter',
    component: FormFooter,
    argTypes: a({
        children: args.text,
    }),
};

const Template = (args) => <FormFooter {...args} />;

export const basic = s(Template, {
    children: (
        <>
            <UsernameField />, <FirstNameField />, <BirthDateField />
        </>
    ),
});
