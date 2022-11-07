import gh, {captureMessage, info} from '../src';

describe('gh', () => {
    it('executes', async () => {
        // noinspection JSUnusedLocalSymbols
        await expect(gh(async function(event: any, context: any) {
            await captureMessage(`the x value is '${event['x']}'`);
            const r = 22 + event['x'];
            await info(`the compute value is '${r}'`);
            return r;
        },{provider: 'none', logger: 'none'})({x: 20}, {})).resolves.toEqual(42);
    });
});
