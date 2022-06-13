import { args, s, a } from '../utils';
import { InfosItem } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/InfosItem',
    component: InfosItem,
    argTypes: a({
        label: args.label,
        value: args.value,
    }),
};

export const basic = s(InfosItem, {
    label: data.common.property,
    value: data.common.value,
});

export const booleanValue = s(InfosItem, {
    label: data.common.property,
    value: true,
});

export const numberValue = s(InfosItem, {
    label: data.common.property,
    value: 42,
});

export const arrayOfNumberValue = s(InfosItem, {
    label: data.common.property,
    value: [42, 12, 34.56],
});
export const objectValue = s(InfosItem, {
    label: data.common.property,
    value: {a: 12, hello: 'World', thisIs: {la: 'Value', and: {the: {other: [1, 45]}}}},
});

export const codeType = s(InfosItem, {
    label: data.common.property,
    value: JSON.stringify({a: 12, hello: 'World', thisIs: {la: 'Value', and: {the: {other: [1, 45]}}}}),
    type: 'code',
});

export const ratingType = s(InfosItem, {
    label: data.common.property,
    value: 3,
    type: 'rating',
});
export const rating5Type = s(InfosItem, {
    label: data.common.property,
    value: 3,
    type: 'rating5',
});
export const rating10Type = s(InfosItem, {
    label: data.common.property,
    value: 3,
    type: 'rating10',
});
export const rating20Type = s(InfosItem, {
    label: data.common.property,
    value: 3,
    type: 'rating20',
});

export const ratioType = s(InfosItem, {
    label: data.common.property,
    value: 0.3,
    type: 'ratio',
});

export const progressType = s(InfosItem, {
    label: data.common.property,
    value: 30,
    type: 'progress',
});
