import {s} from "../utils";
import {Spinner} from '../../src';

export default {
    title: 'Atoms/Spinner',
    component: Spinner,
    argTypes: {
        variant: { control: {type: 'select'}, options: ['full-circle', 'half-circle', 'separate-circle', 'dotted-circle', 'dots', 'squares'] },
    },

}

const Template = args => <Spinner {...args} />;

export const basic = s(Template, {
    variant: 'half-circle',
});

export const showcase = s(args => (
    <div className={'flex flex-row items-center space-x-4'}>
        <Spinner variant={'full-circle'} />
        <Spinner variant={'half-circle'} />
        <Spinner variant={'separate-circle'} />
        <Spinner variant={'dotted-circle'} />
        <Spinner variant={'dots'} />
        <Spinner variant={'squares'} />
    </div>
), {})