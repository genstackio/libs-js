import { args, s, a } from '../utils';
import {
    CreatePasswordForgotPasswordForm,
    FillInOtpForgotPasswordForm,
    SendOtpForgotPasswordForm,
    WizardMenu,
} from '../../src';
import { useState } from 'react';

export default {
    title: 'Atoms/WizardMenu',
    component: WizardMenu,
    argTypes: a({
        active: args._disabled,
        setActive: args._disabled,
        steps: args.steps,
        color: args.color,
        className: args._disabled,
    }),
};

const Template = (args) => {
    const [active, setActive] = useState<number>(0);
    return <WizardMenu active={active} setActive={setActive} {...args} />;
};

export const basic = s(Template, {
    steps: [
        {
            id: 'one',
            label: 'Personal',
            description: 'Add personal details',
            form: SendOtpForgotPasswordForm,
        },
        {
            id: 'two',
            label: 'Address',
            description: 'Add additional info',
            form: FillInOtpForgotPasswordForm,
            image: {
                url: 'https://picsum.photos/800/800',
                alt: 'image',
            },
            bgImage: {
                url: 'https://picsum.photos/3840/2160',
                alt: 'background',
            },
        },
        {
            id: 'three',
            label: 'Message',
            description: 'Add message (optional)',
            form: CreatePasswordForgotPasswordForm,
            image: {
                url: 'https://picsum.photos/700/200',
                alt: 'img',
            },
        },
    ],
});

export const withCurrentStep = s(Template, {
    steps: [
        {
            id: 'one',
            label: 'Personal',
            description: 'Add personal details',
            form: SendOtpForgotPasswordForm,
        },
        {
            id: 'two',
            label: 'Address',
            description: 'Add additional info',
            form: FillInOtpForgotPasswordForm,
            image: {
                url: 'https://picsum.photos/800/800',
                alt: 'image',
            },
            bgImage: {
                url: 'https://picsum.photos/3840/2160',
                alt: 'background',
            },
        },
        {
            id: 'three',
            label: 'Message',
            description: 'Add message (optional)',
            form: CreatePasswordForgotPasswordForm,
            image: {
                url: 'https://picsum.photos/700/200',
                alt: 'img',
            },
        },
    ],
    currentStep: {
        id: 'four',
        label: 'Fourth',
        description: 'The fourth',
        form: FillInOtpForgotPasswordForm,
        image: {
            url: 'https://picsum.photos/800/800',
            alt: 'image',
        },
        bgImage: {
            url: 'https://picsum.photos/3840/2160',
            alt: 'background',
        },
    },
});
