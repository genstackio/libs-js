import { s, a } from '../utils';
import { Divider } from '../../src';

export default {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: a({}),
};

export const basic = s(Divider, {});

export const showcase = s(
    (args) => (
        <div className={'flex flex-col space-y-2'}>
            <p className={'mt-4'}>COLORS</p>
            <Divider size={'md'} color={'primary'} />
            <Divider size={'md'} color={'secondary'} />
            <Divider size={'md'} color={'success'} />
            <Divider size={'md'} color={'info'} />
            <Divider size={'md'} color={'warning'} />
            <Divider size={'md'} color={'danger'} />
            <Divider size={'md'} color={'light'} />
            <Divider size={'md'} color={'dark'} />
            <Divider size={'md'} color={'disabled'} />
            <p className={'mt-4'}>SIZES</p>
            <Divider size={'xs'} />
            <Divider size={'sm'} />
            <Divider size={'md'} />
            <Divider size={'lg'} />
            <Divider size={'xl'} />
            <p className={'mt-4'}>VARIANTS</p>
            <Divider size={'md'} variant={'contained'} />
            <Divider size={'md'} variant={'filled'} />
            <Divider size={'md'} variant={'outlined'} />
        </div>
    ),
    {},
);
