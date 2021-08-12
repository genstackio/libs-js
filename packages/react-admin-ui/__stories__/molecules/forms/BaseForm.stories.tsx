import { args, a, s } from '../../utils';
import { BaseForm, BirthDateField, FirstNameField, InstagramField, IpAddressField, UsernameField } from '../../../src';

export default {
    title: 'Molecules/forms/BaseForm',
    component: BaseForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
        submitting: args.selection,
    }),
};

export const basic = s(BaseForm, {
    rhf: {
        handleSubmit: () => console.log('Clicked'),
    },
    title: 'Je suis un titre',
    subtitle: 'Je suis un sous-titre',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
});

export const both = s(BaseForm, {
    rhf: {
        handleSubmit: () => console.log('Clicked'),
    },
    title: 'Je suis un titre',
    subtitle: 'Je suis un sous-titre',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    header: (
        <>
            <InstagramField />, <IpAddressField />, <FirstNameField />
        </>
    ),
    footer: (
        <>
            <UsernameField />, <FirstNameField />, <BirthDateField />
        </>
    ),
});

export const withHeader = s(BaseForm, {
    rhf: {
        handleSubmit: () => console.log('Clicked'),
    },
    title: 'Je suis un titre',
    subtitle: 'Je suis un sous-titre',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    header: (
        <>
            <InstagramField />, <IpAddressField />, <FirstNameField />
        </>
    ),
});

export const withFooter = s(BaseForm, {
    rhf: {
        handleSubmit: () => console.log('Clicked'),
    },
    title: 'Je suis un titre',
    subtitle: 'Je suis un sous-titre',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    footer: (
        <>
            <UsernameField />, <FirstNameField />, <BirthDateField />
        </>
    ),
});
