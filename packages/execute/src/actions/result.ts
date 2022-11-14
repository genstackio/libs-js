import set from './set';

export default async (params: any, ctx: any) => {
    return set({...params, target: 'result'}, ctx);
}
