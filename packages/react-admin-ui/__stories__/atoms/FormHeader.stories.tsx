import { args, s, a } from '../utils';
import { AddressField, BirthDateField, FirstNameField, FormHeader, InstagramField, IpAddressField } from '../../src';

export default {
    title: 'Atoms/FormHeader',
    component: FormHeader,
    argTypes: a({
        children: args.text,
    }),
};

const Template = (args) => <FormHeader {...args} />;

export const basic = s(Template, {
    children: (
        <>
            <InstagramField />, <IpAddressField />, <FirstNameField />
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
