import { args, s, a } from '../../utils';
import { AppLayoutTemplate, UserToolbar } from '../../../src';

export default {
    title: 'Templates/Layout/AppLayoutTemplate',
    component: AppLayoutTemplate,
    argTypes: a({
        logo: args.logo,
        menu: args.menu,
        toolbar: args.toolbar,
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
    }),
    parameters: {
        layout: 'fullscreen',
    }
};

export const basic = s(AppLayoutTemplate, {
    logo: {
        url: 'https://via.placeholder.com/97x28?text=Logo',
        alt: 'Logo',
    },
    menu: [
        {
            label: 'General',
            type: 'section',
            description: 'Dashboards, Widgets & Layout',
        },
        {
            type: 'menu',
            label: 'Dashboards',
            icon: 'home',
            active: false,
            badges: [
                {
                    type: 'tag',
                    variant: 'contained',
                    text: '2',
                    color: 'success',
                },
            ],
            items: [
                {
                    label: 'Default',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Ecommerce',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
        {
            type: 'item',
            label: 'Calendar',
            icon: 'fa-star',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
        {
            type: 'menu',
            label: 'Widgets',
            icon: 'airplay',
            active: false,
            items: [
                {
                    label: 'General',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Chart',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
    ],
    toolbar: <UserToolbar user={{ firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' }} />,
    children: (
        <>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
            <p>
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
                qkdqsd qdqsmld,qsd qsdqsld qsd qsd qsdqspdqs,dqs dqs dqsdpqs,dqsd qs dqs dqsd qsdpqsod,q sdqs dqsd nqsdqsd
            </p>
        </>
    )
});

export const withLogoClick = s(AppLayoutTemplate, {
    logo: {
        url: 'https://via.placeholder.com/97x28?text=Logo',
        alt: 'Logo',
    },
    onLogoClick: 'https://www.google.fr',
    menu: [
        {
            label: 'General',
            type: 'section',
            description: 'Dashboards, Widgets & Layout',
        },
        {
            type: 'menu',
            label: 'Dashboards',
            icon: 'home',
            active: false,
            badges: [
                {
                    type: 'tag',
                    variant: 'contained',
                    text: '2',
                    color: 'success',
                },
            ],
            items: [
                {
                    label: 'Default',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Ecommerce',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
        {
            type: 'item',
            label: 'Calendar',
            icon: 'fa-star',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
        {
            type: 'menu',
            label: 'Widgets',
            icon: 'airplay',
            active: false,
            items: [
                {
                    label: 'General',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Chart',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
    ],
    toolbar: <UserToolbar user={{ firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' }} />,
});
