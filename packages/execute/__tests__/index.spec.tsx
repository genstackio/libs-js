import execute, { OrderError } from '../src';

describe('execute', () => {
    it('returns success if no definition', async () => {
        await expect(execute({}, {} as any)).resolves.toEqual({
            config: {},
            ctx: {},
            definition: {
                steps: [],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [],
            parallel: false,
            params: {},
            result: {},
            status: 'success',
            successes: [],
        });
    });
    it('returns success if empty definition', async () => {
        await expect(execute({ definition: undefined }, {} as any)).resolves.toEqual({
            config: {},
            ctx: {},
            definition: {
                steps: [],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [],
            parallel: false,
            params: {},
            result: {},
            status: 'success',
            successes: [],
        });
    });
    it('returns success if definition with no steps and no tasks', async () => {
        await expect(execute({ definition: {} }, {} as any)).resolves.toEqual({
            config: {
                definition: {},
            },
            ctx: {},
            definition: {
                steps: [],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [],
            parallel: false,
            params: {},
            result: {},
            status: 'success',
            successes: [],
        });
    });
    it('returns failure if unknown action type for the step', async () => {
        await expect(
            execute(
                {
                    definition: {
                        steps: [{ type: 'unknown' }],
                    },
                },
                {} as any,
            ),
        ).resolves.toEqual({
            config: {
                definition: {
                    steps: [{ type: 'unknown' }],
                },
            },
            ctx: {},
            definition: {
                steps: [{ type: 'unknown' }],
                tasks: [],
            },
            details: {
                status: 'error',
                message: "Order error: Unknown order action type 'unknown'",
                name: 'Error',
                stack: expect.any(String),
            },
            errors: [
                new OrderError(
                    { id: '', name: undefined, type: 'unknown', params: {}, required: true },
                    { id: '', name: undefined, type: 'unknown', params: {}, required: true },
                    new Error("Unknown order action type 'unknown'"),
                ),
            ],
            orders: [{ id: expect.any(String), name: undefined, type: 'unknown', params: {}, required: true }],
            parallel: false,
            params: {},
            result: {},
            status: 'failure',
            successes: [],
        });
    });
    it('returns success and the result if known action type for the step', async () => {
        await expect(
            execute(
                {
                    definition: {
                        steps: [{ type: 'set', params: { key: 'mykey', value: 'my value' } }],
                    },
                },
                {} as any,
            ),
        ).resolves.toEqual({
            config: {
                definition: {
                    steps: [{ type: 'set', params: { key: 'mykey', value: 'my value' } }],
                },
            },
            ctx: {
                mykey: 'my value',
            },
            definition: {
                steps: [{ type: 'set', params: { key: 'mykey', value: 'my value' } }],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [
                {
                    id: expect.any(String),
                    name: undefined,
                    type: 'set',
                    params: { key: 'mykey', value: 'my value' },
                    required: true,
                },
            ],
            parallel: false,
            params: {},
            result: {},
            status: 'success',
            successes: [
                [
                    undefined,
                    {
                        id: expect.any(String),
                        name: undefined,
                        type: 'set',
                        params: { key: 'mykey', value: 'my value' },
                        required: true,
                    },
                ],
            ],
        });
    });
    it('returns success and the result if known action type for the step defined as string', async () => {
        await expect(
            execute(
                {
                    definition: {
                        steps: ['set(key=mykey,value=my value)'],
                    },
                },
                {} as any,
            ),
        ).resolves.toEqual({
            config: {
                definition: {
                    steps: ['set(key=mykey,value=my value)'],
                },
            },
            ctx: {
                mykey: 'my value',
            },
            definition: {
                steps: ['set(key=mykey,value=my value)'],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [
                {
                    id: expect.any(String),
                    name: undefined,
                    type: 'set',
                    params: { key: 'mykey', value: 'my value' },
                    required: true,
                },
            ],
            parallel: false,
            params: {},
            result: {},
            status: 'success',
            successes: [
                [
                    undefined,
                    {
                        id: expect.any(String),
                        name: undefined,
                        type: 'set',
                        params: { key: 'mykey', value: 'my value' },
                        required: true,
                    },
                ],
            ],
        });
    });
    it('returns success and the result after having executed the steps in order', async () => {
        const a = jest.fn();
        const d = jest.fn();
        const c = jest.fn();
        a.mockImplementation((params: any, ctx: any) => {
            ctx.setFromA = 'a';
            ctx.setFromAandD = 'a';
            ctx.setFromAandC = 'a';

            return {
                fromA: 'a',
                fromAandD: 'a',
                fromAandC: 'a',
            };
        });
        d.mockImplementation((params: any, ctx: any) => {
            ctx.setFromD = 'd';
            ctx.setFromAandD = 'd';
            ctx.setFromDandC = 'd';

            return {
                fromD: 'd',
                fromAandD: 'd',
                fromDandC: 'd',
            };
        });
        c.mockImplementation((params: any, ctx: any) => {
            ctx.setFromC = 'c';
            ctx.setFromAandC = 'c';
            ctx.setFromDandC = 'c';

            return {
                fromC: 'c',
                fromAandC: 'c',
                fromDandC: 'c',
            };
        });
        await expect(
            execute(
                {
                    definition: {
                        steps: [{ type: 'a' }, { type: 'c' }, { type: 'd' }],
                    },
                },
                { actions: { a, d, c } } as any,
            ),
        ).resolves.toEqual({
            config: {
                definition: {
                    steps: [{ type: 'a' }, { type: 'c' }, { type: 'd' }],
                },
            },
            ctx: {
                setFromA: 'a',
                setFromD: 'd',
                setFromC: 'c',
                setFromAandD: 'd',
                setFromAandC: 'c',
                setFromDandC: 'd',
            },
            definition: {
                steps: [{ type: 'a' }, { type: 'c' }, { type: 'd' }],
                tasks: [],
            },
            details: {
                status: 'success',
            },
            errors: [],
            orders: [
                { id: expect.any(String), name: undefined, type: 'a', params: {}, required: true },
                { id: expect.any(String), name: undefined, type: 'c', params: {}, required: true },
                { id: expect.any(String), name: undefined, type: 'd', params: {}, required: true },
            ],
            parallel: false,
            params: {},
            result: {
                fromA: 'a',
                fromD: 'd',
                fromC: 'c',
                fromAandD: 'd',
                fromAandC: 'c',
                fromDandC: 'd',
            },
            status: 'success',
            successes: [
                [
                    { fromA: 'a', fromAandD: 'a', fromAandC: 'a' },
                    { id: expect.any(String), name: undefined, type: 'a', params: {}, required: true },
                ],
                [
                    { fromC: 'c', fromAandC: 'c', fromDandC: 'c' },
                    { id: expect.any(String), name: undefined, type: 'c', params: {}, required: true },
                ],
                [
                    { fromD: 'd', fromAandD: 'd', fromDandC: 'd' },
                    { id: expect.any(String), name: undefined, type: 'd', params: {}, required: true },
                ],
            ],
        });
    });
});
