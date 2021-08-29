import { args, s, a } from '../utils';
import { Column } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Column',
    component: Column,
    argTypes: a({
        children: args.text,
        center: args.selection,
    }),
};

export const basic = s(Column, {
    children: (
        <>
            <div>{data.common.content}</div>
            <div>{data.common.content}</div>
            <div>{data.common.content}</div>
        </>
    ),
});

export const centered = s(Column, {
    children: data.common.content,
    center: true,
});
