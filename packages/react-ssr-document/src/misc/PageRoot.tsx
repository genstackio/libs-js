export function PageRoot({ html }: PageRootProps) {
    return <div id={'root'} dangerouslySetInnerHTML={{ __html: html }} />;
}

export interface PageRootProps {
    html: string;
}

// noinspection JSUnusedGlobalSymbols
export default PageRoot;
