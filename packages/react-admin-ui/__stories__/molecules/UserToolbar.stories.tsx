import { s, a } from '../utils';
import { Button, UserToolbar } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/UserToolbar',
    component: UserToolbar,
    argTypes: a({}),
};

export const basic = s(UserToolbar, {
    user: { firstName: data.user.firstName, lastName: data.user.lastName, email: data.user.email },
});

export const withAll = s(UserToolbar, {
    user: { firstName: data.user.firstName, lastName: data.user.lastName, email: data.user.email },
    userMenu: [
        {
            icon: 'person',
            label: 'Account',
            target: 'https://www.google.com/',
        },
        {
            icon: 'settings',
            label: 'Settings',
            target: 'https://www.google.com/',
        },
        {
            icon: 'exit_to_app',
            label: 'Logout',
            target: () => alert('Logout'),
        },
    ],
    children: (
        <div className={'flex space-x-4'}>
            <Button color={'primary'} variant={'outlined'} className={'sm:hidden'}>
                Bonus UI
            </Button>
            <Button color={'secondary'} variant={'outlined'} className={'sm:hidden'}>
                Level Menu
            </Button>
        </div>
    ),
});

export const withSomeButtons = s(UserToolbar, {
    user: { firstName: data.user.firstName, lastName: data.user.lastName, email: data.user.email },
    fullScreenEnabled: true,
    shoppingCartEnabled: true,
    notificationsEnabled: true,
    languageEnabled: true,
});

export const withAllButtons = s(UserToolbar, {
    user: { firstName: data.user.firstName, lastName: data.user.lastName, email: data.user.email },
    fullScreenEnabled: true,
    shoppingCartEnabled: true,
    notificationsEnabled: true,
    darkModeEnabled: true,
    messagesEnabled: true,
    searchBarEnabled: true,
    languageEnabled: true,
    favoritesEnabled: true,
});
