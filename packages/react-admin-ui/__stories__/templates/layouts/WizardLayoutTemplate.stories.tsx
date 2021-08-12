import { args, s, a } from '../../utils';
import { useForm, FirstNameField, LastNameField, PhoneField, WizardLayoutTemplate, Block } from '../../../src';

export default {
    title: 'WizardLayoutTemplates/Layout/WizardLayoutWizardLayoutTemplate',
    component: WizardLayoutTemplate,
    argTypes: a({
        steps: args.steps,
        defaultValues: args._disabled,
        onSubmit: args._disabled,
        color: args.color,
        className: args._disabled,
    }),
};

const Form1 = (props) => {
    const { Form, SubmitButton, field } = useForm(props, 'form1');
    return (
        <Form {...props}>
            <Block className={'mb-10 xs:mb-0 bg-clear xs:rounded-none'}>
                <FirstNameField {...field} required autoFocus />
            </Block>
            <SubmitButton />
        </Form>
    );
};
const Form2 = (props) => {
    const { Form, SubmitButton, field } = useForm(props, 'form2');
    return (
        <Form {...props}>
            <Block className={'mb-10 xs:mb-0 bg-clear xs:rounded-none'}>
                <LastNameField {...field} required autoFocus />
            </Block>
            <SubmitButton />
        </Form>
    );
};
const Form3 = (props) => {
    const { Form, SubmitButton, field } = useForm(props, 'form3');
    return (
        <Form {...props}>
            <Block className={'mb-10 xs:mb-0 bg-clear xs:rounded-none'}>
                <PhoneField {...field} required autoFocus />
            </Block>
            <SubmitButton />
        </Form>
    );
};

export const basic = s(WizardLayoutTemplate, {
    color: 'primary',
    steps: [
        {
            id: 'one',
            label: 'Personal',
            description: 'Add personal details',
            component: Form1,
        },
        {
            id: 'two',
            label: 'Address',
            description: 'Add additional info',
            component: Form2,
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
            component: Form3,
            image: {
                url: 'https://picsum.photos/700/200',
                alt: 'img',
            },
        },
    ],
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaultValues: {},
});
