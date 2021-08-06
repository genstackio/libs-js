import { args, s, a } from '../utils';
import {
    AddressField,
    BirthDateField,
    FirstNameField,
    FormFooter,
    InstagramField,
    IpAddressField,
    UsernameField,
} from '../../src';

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

export const moreFields = s(Template, {
    children: (
        <>
            <InstagramField />
            <IpAddressField />
            <FirstNameField />
            <AddressField />
            <BirthDateField />
        </>
    ),
});
