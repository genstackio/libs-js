import { args, s, a } from '../utils';
import { ErrorTemplate } from '../../src';

export default {
    title: 'Templates/ErrorTemplate',
    component: ErrorTemplate,
    argTypes: a({
        code: args.code,
        message: args.message,
        actions: args.actions,
        icon: args.icon,
        color: args.color,
    }),
};

export const basic = s(ErrorTemplate, {
    code: 400,
    message:
        'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.',
    actions: [
        {
            label: 'BACK TO HOME PAGE',
            target: '/',
        },
    ],
    icon: 'sentiment_very_dissatisfied',
    color: 'primary',
});
