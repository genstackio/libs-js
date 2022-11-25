import ev from '../src';

beforeEach(async () => {
    await ev.clear();
})
describe('ev', () => {
    it('unknown key return undefined', async () => {
        await expect(ev.get('unknown')).resolves.toBeUndefined();
    });
    it('existing key in cache return existing value', async () => {
        await ev.set('existing', 'my value');
        await expect(ev.get('existing')).resolves.toEqual('my value');
    });
});
