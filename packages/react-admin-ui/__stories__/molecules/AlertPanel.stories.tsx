import { args, s, a } from '../utils';
import { AlertPanel } from '../../src';

export default {
    title: 'Molecules/AlertPanel',
    component: AlertPanel,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        title: args.title,
        closable: args.closable,
    }),
};

const Template = (args) => (
    <AlertPanel {...args}>
        <div>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</div>
    </AlertPanel>
);

export const basic = s(Template, {
    title: 'Well done!',
});
