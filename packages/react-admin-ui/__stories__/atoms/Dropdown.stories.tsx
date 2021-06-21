import {args, s, a} from "../utils";
import {Dropdown} from '../../src';

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    argTypes: a({
        menuItems: args.menuItems,
        color: args.color,
        variant: args.blockVariant,
    }),
}

const Template = args => <Dropdown {...args} />;

export const basic = s(Template, {
    menuItems: [
        {name: 'Today'},
        {name: 'Tomorrow'},
        {name: 'Yesterday'},
    ]
});
