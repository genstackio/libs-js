import { args, a, s } from '../utils';
import { CallToActionSection } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/CallToActionSection',
    component: CallToActionSection,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        text: args.text,
        btnLabel: args.btnLabel,
        btnTarget: args.target,
        color: args.color,
    }),
};

export const basic = s(CallToActionSection, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    btnLabel: data.buttons.button1.label,
    btnType: 'contained',
    btnColor: 'primary',
    btn2Label: data.buttons.button2.label,
    btn2Type: 'contained',
    btn2Color: 'secondary',
});
