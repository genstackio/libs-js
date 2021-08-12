import { args, s, a } from '../utils';
import { AddressField, BirthDateField, FirstNameField, FormHeader, InstagramField, IpAddressField } from '../../src';

export default {
    title: 'Atoms/FormHeader',
    component: FormHeader,
    argTypes: a({
        children: args.text,
    }),
};

export const basic = s(FormHeader, {
    children: (
        <>
            <InstagramField />
            <IpAddressField />
            <FirstNameField />
        </>
    ),
});

export const moreFields = s(FormHeader, {
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
