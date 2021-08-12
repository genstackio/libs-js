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

export const basic = s(FormFooter, {
    children: (
        <>
            <UsernameField />
            <FirstNameField />
            <BirthDateField />
        </>
    ),
});

export const moreFields = s(FormFooter, {
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
