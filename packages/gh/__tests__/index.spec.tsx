import gh from '../src';

describe('gh', () => {
    it('executes', async () => {
        await expect(gh(async function(event: any, context: any) {
            return 22 + event['x'];
        },{provider: 'none'})({x: 20}, {})).resolves.toEqual(42)
    });
});
