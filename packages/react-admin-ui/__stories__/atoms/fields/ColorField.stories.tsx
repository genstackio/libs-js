import {s} from "../../utils";
import {ColorField} from '../../../src';

export default {
  title: 'Atoms/fields/ColorField',
  component: ColorField,
}

const Template = args => <ColorField {...args} />;

export const basic = s(Template, {
})
