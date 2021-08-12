import { args, s, a } from '../utils';
import MenuAppBar from '../../src/organisms/MenuAppBar';

export default {
    title: 'Organisms/MenuAppBar',
    component: MenuAppBar,
    argTypes: a({
        logo: args.logo,
        menuItems: args.menuItems,
    }),
};

export const basic = s(MenuAppBar, {
    logo: {
        url: 'https://image.flaticon.com/icons/png/512/3800/3800024.png',
        alt: 'Slack Logo',
    },
    menuItems: [
        { label: 'Home', target: 'btnTarget', active: true },
        { label: 'About Us', target: 'btnTarget', active: false },
        { label: 'Blog', target: 'btnTarget', active: false },
        { label: 'Contact Us', target: 'btnTarget', active: false },
    ],
});

export const withoutLogo = s(MenuAppBar, {
    menuItems: [
        { label: 'Home', target: 'btnTarget', active: true },
        { label: 'About Us', target: 'btnTarget', active: false },
        { label: 'Blog', target: 'btnTarget', active: false },
        { label: 'Contact Us', target: 'btnTarget', active: false },
    ],
});
