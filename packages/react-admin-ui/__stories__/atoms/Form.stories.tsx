import { args, s, a } from '../utils';
import { FirstNameField, Form, InstagramField, IpAddressField, AddressField, BirthDateField } from '../../src';

export default {
    title: 'Atoms/Form',
    component: Form,
    argTypes: a({
        children: args.text,
    }),
};

export const basic = s(Form, {
    children: (
        <>
            <InstagramField />
            <IpAddressField />
            <FirstNameField />
        </>
    ),
});

export const moreFields = s(Form, {
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
