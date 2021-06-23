import { args, s, a } from '../utils';
import { BodyMainBar, Icon } from '../../src';

export default {
    title: 'Organisms/BodyMainBar',
    component: BodyMainBar,
    argTypes: a({
        children: args.children,
        actions: args.actions,
    }),
};

const Template = (args) => <BodyMainBar {...args} />;

export const basic = s(Template, {
    children: (
        <div className={'flex space-x-4'}>
            <div className={'flex items-center '}>
                <Icon icon={'all_inclusive'} />
                All
            </div>
            <div className={'flex items-center'}>
                <Icon icon={'track_changes'} />
                Doing
            </div>
            <div className={'flex items-center'}>
                <Icon icon={'check_circle_outlined'} />
                Done
            </div>
        </div>
    ),
    actions: [
        {
            color: 'primary',
            variant: 'contained',
            label: 'Create New Project',
            target: () => alert('Clicked'),
            icon: 'add_box_outlined',
        },
        {
            color: 'secondary',
            variant: 'contained',
            label: 'Cancel',
            icon: 'arrow_back_outlined',
        },
        {
            color: 'light',
            variant: 'contained',
            label: 'Third',
            target: 'https://www.google.com/',
        },
    ],
});
