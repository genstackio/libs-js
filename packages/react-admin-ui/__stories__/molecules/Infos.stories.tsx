import { s, a } from '../utils';
import { Infos } from '../../src';

export default {
    title: 'Molecules/Infos',
    component: Infos,
    argTypes: a({}),
};

export const basic = s(Infos, {
    items: [
        {
            label: 'label',
            value: 'Jason',
        },
        {
            label: 'gender',
            value: 'Male',
        },
        {
            label: 'birthday',
            value: '30 Oct 1992',
        },
        {
            label: 'personnality',
            value: 'Cool',
        },
        {
            label: 'city',
            value: 'Delhi',
        },
        {
            label: 'telephone',
            value: '+0 1800 11547',
        },
        {
            label: 'email',
            value: 'jasonb@gmail.com',
        },
        {
            label: 'website',
            value: 'www.jason@.com',
        },
        {
            label: 'interest',
            value: 'photography',
        },
    ],
});
