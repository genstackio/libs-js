import BaseSdk from './BaseSdk';
import {
    bulk_action,
    BulkActionsInput,
    BulkActionsResponse,
    CloseIndexInput,
    CloseIndexResponse,
    CountDocumentsInput,
    CountDocumentsResponse,
    CountIndexDocumentsInput,
    CountIndexDocumentsResponse,
    CreateIndexInput,
    CreateIndexResponse,
    delete_query,
    DeleteIndexDocumentInput,
    DeleteIndexDocumentResponse,
    DeleteIndexDocumentsByQueryInput,
    DeleteIndexDocumentsByQueryResponse,
    DeleteIndexInput,
    DeleteIndexResponse,
    document_query,
    GetDocumentsInput,
    GetDocumentsResponse,
    GetIndexDocumentInput,
    GetIndexDocumentResponse,
    GetIndexDocumentsInput,
    GetIndexDocumentsResponse,
    GetIndexInput,
    GetIndexResponse, GetTaskInput, GetTaskResponse, GetTasksInput, GetTasksResponse,
    HasIndexInput,
    HealthInput,
    HealthResponse,
    index_bulk_action,
    index_document_query,
    IndexBulkActionsInput,
    IndexBulkActionsResponse,
    IndexDocumentInput,
    IndexDocumentResponse,
    IndexHealthInput,
    IndexHealthResponse,
    ReindexInput,
    ReindexResponse,
    script, SearchAllIndicesInput, SearchAllIndicesResponse,
    SearchInput,
    SearchResponse,
    ShrinkIndexInput,
    ShrinkIndexResponse, SqlInput, SqlResponse,
    update_query,
    UpdateIndexDocumentInput,
    UpdateIndexDocumentResponse,
    UpdateIndexDocumentsByQueryInput,
    UpdateIndexDocumentsByQueryResponse,
    UpdateIndexMappingsInput,
    UpdateIndexMappingsResponse
} from "./types";

export class Sdk extends BaseSdk {
    async sql(query: string, def?:SqlInput): Promise<SqlResponse> {
        return this.request('_plugins/_sql', 'POST', {query, ...def});
    }
    async health(def?: HealthInput): Promise<HealthResponse> {
        return this.request('_cluster/health', 'GET', def)
    }
    async indexHealth(name: string, def?: IndexHealthInput): Promise<IndexHealthResponse> {
        return this.request(`_cluster/health/${name}`, 'GET', def)
    }
    async searchIndex(name: string, def?: SearchInput): Promise<SearchResponse> {
        return this.requestIndex(name, '_search', 'POST', def)
    }
    // noinspection JSUnusedGlobalSymbols
    async searchAllIndices(def?: SearchAllIndicesInput): Promise<SearchAllIndicesResponse> {
        return this.request( '_search', 'POST', def)
    }
    async createIndex(name: string, def?: CreateIndexInput): Promise<CreateIndexResponse> {
        return this.request(name, 'PUT', def)
    }
    async deleteIndex(name: string, def?: DeleteIndexInput): Promise<DeleteIndexResponse> {
        return this.request(name, 'DELETE', def)
    }
    async closeIndex(name: string, def?: CloseIndexInput): Promise<CloseIndexResponse> {
        return this.requestIndex(name, '_close', 'POST', def)
    }
    async reIndex(name: string, target: string, def?: ReindexInput): Promise<ReindexResponse> {
        return this.request('_reindex', 'POST', {source: {index: name}, dest: {index: target}, ...def})
    }
    async updateIndexMappings(name: string, def?: UpdateIndexMappingsInput): Promise<UpdateIndexMappingsResponse> {
        return this.requestIndex(name, '_close', 'POST', def)
    }
    async getIndex(name: string, def?: GetIndexInput): Promise<GetIndexResponse> {
        return this.request(name, 'GET', def)
    }
    async shrinkIndex(name: string, target: string, def?: ShrinkIndexInput): Promise<ShrinkIndexResponse> {
        return this.requestIndex(name, `_shrink/${target}`, 'POST', def)
    }
    // noinspection JSUnusedGlobalSymbols
    async hasIndex(name: string, def?: HasIndexInput): Promise<boolean> {
        return this.booleanRequest(name, 'HEAD', def);
    }
    async bulkActions(actions: bulk_action[] = [], def?: BulkActionsInput): Promise<BulkActionsResponse> {
        return this.request('_bulk', 'POST', {_rawBody: actions.map(a => (undefined === a) ? "" : JSON.stringify(a)).join("\n") + "\n", ...def});
    }
    async indexBulkActions(name: string, actions: index_bulk_action[] = [], def?: IndexBulkActionsInput): Promise<IndexBulkActionsResponse> {
        return this.requestIndex(name, '_bulk', 'POST', {_rawBody: actions.map(a => (undefined === a) ? "" : JSON.stringify(a)).join("\n") + "\n", ...def});
    }
    // noinspection JSUnusedGlobalSymbols
    async indexDocument(index: string, document: any, id?: string, def?: IndexDocumentInput): Promise<IndexDocumentResponse> {
        return this.requestIndexDocument(index, id, '_doc', 'PUT', {...def, ...document});
    }
    async getDocuments(docs: document_query[], def?: GetDocumentsInput): Promise<GetDocumentsResponse> {
        return this.request('_mget', 'GET', {docs, ...def});
    }
    // noinspection JSUnusedGlobalSymbols
    async getIndexDocuments(index: string, docs: index_document_query[], def?: GetIndexDocumentsInput): Promise<GetIndexDocumentsResponse> {
        return this.requestIndex(index, '_mget', 'GET', {docs, ...def});
    }
    async getIndexDocument(index: string, id: string, def?: GetIndexDocumentInput): Promise<GetIndexDocumentResponse> {
        return this.requestIndexDocument(index, id, '_doc', 'GET', def);
    }
    async deleteIndexDocument(index: string, id: string, def?: DeleteIndexDocumentInput): Promise<DeleteIndexDocumentResponse> {
        return this.requestIndexDocument(index, id, '_doc', 'DELETE', def);
    }
    async updateIndexDocument(index: string, id: string, def: UpdateIndexDocumentInput): Promise<UpdateIndexDocumentResponse> {
        return this.requestIndexDocument(index, id, '_update', 'POST', def);
    }
    async updateIndexDocumentsByQuery(index: string, query: update_query, script: script, def?: UpdateIndexDocumentsByQueryInput): Promise<UpdateIndexDocumentsByQueryResponse> {
        return this.requestIndex(index, '_update_by_query', 'POST', {query, script, ...def});
    }
    async deleteIndexDocumentsByQuery(index: string, query: delete_query, def?: DeleteIndexDocumentsByQueryInput): Promise<DeleteIndexDocumentsByQueryResponse> {
        return this.requestIndex(index, '_delete_by_query', 'POST', {query, ...def});
    }
    // noinspection JSUnusedGlobalSymbols
    async countIndexDocuments(index: string, def?: CountIndexDocumentsInput): Promise<CountIndexDocumentsResponse> {
        return this.requestIndex(index, '_count', 'GET', def);
    }
    async countDocuments(def?: CountDocumentsInput): Promise<CountDocumentsResponse> {
        return this.request( '_count', 'GET', def);
    }
    // noinspection JSUnusedGlobalSymbols
    async getTasks(def?: GetTasksInput): Promise<GetTasksResponse> {
        return this.request('_tasks', 'GET', def);
    }
    // noinspection JSUnusedGlobalSymbols
    async getTask(id: string, def?: GetTaskInput): Promise<GetTaskResponse> {
        return this.request(`_tasks/${id}`, 'GET', def);
    }
    async searchIndexPage(name: string, query?: any, offset?: number, limit: number = 50, def?: Omit<SearchInput, 'query'>, sort?: string) {
        const response = await this.searchIndex(name, {query, from: offset, size: limit, ...def, urlParams: {...(sort ? {sort} : {}), track_total_hits: true, ...(def?.urlParams || {})}});
        const nextHitIndex = (offset ? offset : 0) + response.hits.hits.length;
        const hasMoreHits = nextHitIndex < response.hits.total.value;
        return {
            cursor: hasMoreHits ? String(nextHitIndex) : undefined,
            items: response.hits.hits.map(item => item._source),
            count: response.hits.total.value,
        };
    }
    protected async findAllPages<T = any>(pageFetcher: (cursor: string) => Promise<{items: T[], cursor?: string, count?: number}>): Promise<T[]> {
        let cursor: any = undefined;
        let items: T[] = [];
        let page: {items: any[], cursor?: string, count?: number} | undefined = undefined;
        do {
            page = await pageFetcher(cursor);
            items = [...items, ...(page!.items || [])];
            cursor = page!.cursor;
        } while(!!cursor);
        return items as T[];
    }
}

export default Sdk;
