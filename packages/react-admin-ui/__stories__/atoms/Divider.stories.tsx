import { s, a } from '../utils';
import { Divider } from '../../src';

export default {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: a({}),
};
const Template = (args) => <Divider {...args} />;

export const basic = s(Template, {});

export const showcase = s(
    (args) => (
        <div className={'flex flex-col space-y-2'}>
            <p className={'mt-4'}>COLORS</p>
            <Template size={'md'} color={'primary'} />
            <Template size={'md'} color={'secondary'} />
            <Template size={'md'} color={'success'} />
            <Template size={'md'} color={'info'} />
            <Template size={'md'} color={'warning'} />
            <Template size={'md'} color={'danger'} />
            <Template size={'md'} color={'light'} />
            <Template size={'md'} color={'dark'} />
            <Template size={'md'} color={'disabled'} />
            <p className={'mt-4'}>SIZES</p>
            <Template size={'xs'} />
            <Template size={'sm'} />
            <Template size={'md'} />
            <Template size={'lg'} />
            <Template size={'xl'} />
            <p className={'mt-4'}>VARIANTS</p>
            <Template size={'md'} variant={'contained'} />
            <Template size={'md'} variant={'filled'} />
            <Template size={'md'} variant={'outlined'} />
        </div>
    ),
    {},
);
