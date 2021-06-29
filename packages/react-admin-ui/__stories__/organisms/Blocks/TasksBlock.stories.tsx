import { s, a } from '../../utils';
import { TasksBlock } from '../../../src';

export default {
    title: 'Organisms/Blocks/TasksBlock',
    component: TasksBlock,
    argTypes: a({}),
};

const Template = (args) => <TasksBlock {...args} />;

export const basic = s(Template, {});
