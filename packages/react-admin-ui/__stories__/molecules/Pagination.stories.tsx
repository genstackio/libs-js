import { args, s, a } from '../utils';
import { Pagination } from '../../src';

export default {
    title: 'Molecules/Pagination',
    component: Pagination,
    argTypes: a({
        size: args.size,
        color: args.color,
        disabledPass: args.disabled,
        disabledSkip: args.disabled,
    }),
};

export const basic = s(Pagination, {
    total: 12,
    size: 'md',
});

export const fewPages = s(
    (args) => (
        <div className={'space-y-2'}>
            <div className={'flex items-center space-x-4'}>
                <Pagination total={3} color={'primary'} size={'sm'} />
                <Pagination total={5} color={'secondary'} size={'md'} />
                <Pagination total={1} color={'default'} size={'lg'} />
            </div>
        </div>
    ),
    {},
);

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <p>SIZE</p>
            <div className={'flex items-center space-x-4'}>
                <Pagination total={12} size={'sm'} />
                <Pagination total={12} size={'md'} />
                <Pagination total={12} size={'lg'} />
            </div>
            <p>COLORS</p>
            <div className={'flex items-center space-x-4'}>
                <Pagination total={3} color={'primary'} />
                <Pagination total={3} color={'secondary'} />
                <Pagination total={3} color={'success'} />
                <Pagination total={3} color={'info'} />
                <Pagination total={3} color={'warning'} />
                <Pagination total={3} color={'danger'} />
                <Pagination total={3} color={'light'} />
                <Pagination total={3} color={'dark'} />
            </div>
        </div>
    ),
    {},
);
