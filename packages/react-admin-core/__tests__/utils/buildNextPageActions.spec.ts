import buildNextPageActions from '../../src/utils/buildNextPageActions';

describe('buildNextPageActions', () => {
    it('0 => 1', () => {
        const r = buildNextPageActions(1, {
            pageIndex: 0,
            navigationMode: 'page',
            cursor: '',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/2/10/default/:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 1, currentCursor: undefined, previousCursors: [''], size: 10 } },
            },
             */
        ]);
    });
    it('1 => 2', () => {
        const r = buildNextPageActions(2, {
            pageIndex: 1,
            navigationMode: 'page',
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/3/10/default/:c1:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 2, currentCursor: undefined, previousCursors: ['', 'c1'], size: 10 } },
            },
             */
        ]);
    });
    it('1 => 2 (listRoute="")', () => {
        const r = buildNextPageActions(2, {
            pageIndex: 1,
            navigationMode: 'page',
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 2, currentCursor: undefined, previousCursors: ['', 'c1'], size: 10 } },
            },
             */
        ]);
    });
    it('1 => 2 (searchMode=true)', () => {
        const r = buildNextPageActions(2, {
            pageIndex: 1,
            navigationMode: 'page',
            searchMode: true,
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/3/10/search/:c1:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 2, currentCursor: undefined, previousCursors: ['', 'c1'], size: 10 } },
            },
             */
        ]);
    });
    it('1 => 2 (searchMode=false)', () => {
        const r = buildNextPageActions(2, {
            pageIndex: 1,
            navigationMode: 'page',
            searchMode: false,
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/3/10/default/:c1:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 2, currentCursor: undefined, previousCursors: ['', 'c1'], size: 10 } },
            },
             */
        ]);
    });
    it('1 => 1', () => {
        const r = buildNextPageActions(1, {
            pageIndex: 1,
            navigationMode: 'page',
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([]);
    });
    it('1 => 0', () => {
        const r = buildNextPageActions(0, {
            pageIndex: 1,
            navigationMode: 'page',
            cursor: 'c1',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [''],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/1/10/default/' } },
            /*
            { type: 'page_state', config: { state: { index: 0, currentCursor: '', previousCursors: [], size: 10 } } },
             */
        ]);
    });
    it('0 => undefined', () => {
        const r = buildNextPageActions(undefined, {
            pageIndex: 0,
            navigationMode: 'page',
            cursor: '',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/2/10/default/:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 1, currentCursor: undefined, previousCursors: [''], size: 10 } },
            },
             */
        ]);
    });
    it('2 => 1', () => {
        const r = buildNextPageActions(1, {
            pageIndex: 2,
            navigationMode: 'page',
            cursor: 'c2',
            pageSize: 10,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: ['', 'c1'],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/2/10/default/:c1' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 1, currentCursor: 'c1', previousCursors: [''], size: 10 } },
            },
             */
        ]);
    });
    it('0 => 1 (20 rows)', () => {
        const r = buildNextPageActions(1, {
            pageIndex: 0,
            navigationMode: 'page',
            cursor: '',
            pageSize: 20,
            name: 'mytypes',
            listRoute: '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}',
            pagePreviousCursors: [],
        });

        expect(r).toEqual([
            { type: 'history_push', config: { uri: '/mytypes/page/2/20/default/:' } },
            /*
            {
                type: 'page_state',
                config: { state: { index: 1, currentCursor: undefined, previousCursors: [''], size: 20 } },
            },
             */
        ]);
    });
});
