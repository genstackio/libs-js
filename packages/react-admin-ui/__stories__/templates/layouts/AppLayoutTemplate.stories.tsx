import {args, s, a} from "../../utils";
import {AppLayoutTemplate} from '../../../src';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AirplayOutlinedIcon from "@material-ui/icons/AirplayOutlined";

export default {
    title: 'Templates/Layout/AppLayoutTemplate',
    component: AppLayoutTemplate,
    argTypes: a({
        logo: args.logo,
        menu: args.menu,
        toolbar: args.toolbar,
        children: args.children,
        title: args.title,
        text: args.children,
        color: args.color,
        variant: args.blockVariant,
    },
}

const Template = args => <AppLayoutTemplate {...args} />

export const basic = s(Template, {
    logo: {
        url: 'https://via.placeholder.com/60',
        alt: 'Logo',
    },
    title: "General",
    text: "Dashboard, Widgets & Layout.",
    menu: [
        {
            icon: <HomeOutlinedIcon/>,
            title: 'Dashboard',
            content: [{
                label: 'Default',
                target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            },
                {
                    label: 'Ecommerce',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                }
            ]
        },
        {
            icon: <AirplayOutlinedIcon/>,
            title: 'Widgets',
            badge: {
                type: 'pill',
                variant: 'contained',
                label: '2',
                color: 'danger',
            },
            content: [{
                label: 'General',
                target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            },
                {
                    label: 'Chart',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                }
            ]
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="feather feather-layout">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>,
            title: 'Page Layout',
            content: [
                {
                    label: 'Boxed',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'RTL',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'Dark Layout',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'Hide Navbar Scroll',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'Footer Light',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'Footer Dark',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
                {
                    label: 'Footer Fixed',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                },
            ]
        }
    ]
});
