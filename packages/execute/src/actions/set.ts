export default async (params: any, ctx: any) => {
    ctx[params['key'] || 'value'] = params['value'] || true;
}