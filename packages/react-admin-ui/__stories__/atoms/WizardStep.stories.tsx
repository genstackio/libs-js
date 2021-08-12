import { args, s, a } from '../utils';
import { WizardStep } from '../../src';

export default {
    title: 'Atoms/WizardStep',
    component: WizardStep,
    argTypes: a({
        index: args.index,
        label: args.label,
        description: args.description,
        onClick: args._disabled,
        color: args.color,
        className: args._disabled,
    }),
};

export const basic = s(WizardStep, {
    index: 1,
    label: 'Personal',
    description: 'Add personal details',
    onClick: () => alert('click'),
    color: 'primary',
});

export const disabled = s(WizardStep, {
    index: 1,
    label: 'Personal',
    description: 'Add personal details',
    onClick: () => alert('click'),
    color: 'primary',
    disabled: true,
});
