export default async (params: any, ctx: any) => {
    const o = { [params['key'] || 'value']: 'undefined' !== params['value'] ? params['value'] : true };

    switch (params['target']) {
        case 'result':
            return o;
        default:
        case 'ctx':
            Object.assign(ctx, o);
            return;
    }
};
