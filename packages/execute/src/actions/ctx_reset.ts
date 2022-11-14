export default async (params: any, ctx: any) => {
    delete ctx[params['key'] || 'value'];
}
