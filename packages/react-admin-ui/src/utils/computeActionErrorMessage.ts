import detectErrorType from './detectErrorType';

export function computeActionErrorMessage(e: any, { name, t }: { name: string; t: Function }) {
    const type = detectErrorType(e);

    const message = t([
        `error_action_${name.replace(/-/g, '_').toLowerCase()}_${(type || 'unknown').replace(/-/g, '_').toLowerCase()}`,
        `error_action_${name.replace(/-/g, '_').toLowerCase()}_generic`,
        `error_action_generic_${(type || 'unknown').replace(/-/g, '_').toLowerCase()}`,
        `error_action_generic_generic`,
        '',
    ]);

    return message || undefined;
}

export default computeActionErrorMessage;
