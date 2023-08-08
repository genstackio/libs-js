export function PageRaw({ value = undefined }: PageRawProps) {
    return !!value ? <div dangerouslySetInnerHTML={{ __html: value }} /> : null;
}

export interface PageRawProps {
    value?: string;
}

// noinspection JSUnusedGlobalSymbols
export default PageRaw;
