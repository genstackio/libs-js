import {s} from "../../utils";
import {TimeField, TextField} from '../../../src';

export default {
    title: 'Atoms/fields/TimeField',
    component: TimeField,
    argTypes: { },
}

const Template = args => <TimeField {...args} />;

export const basic = s(Template, {
  defaultValue: '11:54',
})
