// noinspection HtmlRequiredTitleElement

import { ssr_page_context_value } from '@genstackio/react-contexts/lib/types';
import PageRoot from './PageRoot';
import PageData from './PageData';
import PageStyles from './PageStyles';
import PageScripts from './PageScripts';
import { document_body_options, document_head_options } from '@genstackio/react-types';
import PageRaw from './PageRaw';

export function Document({
    helmet,
    html,
    extractor,
    context,
    clientContext,
    children,
    bodyOptions = {},
    headOptions = {},
}: DocumentProps) {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    return (
        <html {...htmlAttrs}>
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                <PageStyles context={context} styles={headOptions?.styles} />
                <PageScripts scripts={headOptions?.scripts} />
            </head>
            <body {...bodyAttrs}>
                <PageRaw value={bodyOptions?.prepend} />
                <PageStyles styles={bodyOptions?.styles} />
                <PageData context={clientContext} />
                <PageRoot html={html} />
                <PageScripts context={context} extractor={extractor} scripts={bodyOptions?.scripts} />
                {children || ''}
                <PageRaw value={bodyOptions?.append} />
            </body>
        </html>
    );
}

export interface DocumentProps {
    helmet: any;
    html: string;
    children?: any;
    context: ssr_page_context_value;
    clientContext?: ssr_page_context_value;
    extractor?: any;
    bodyOptions?: document_body_options;
    headOptions?: document_head_options;
}

// noinspection JSUnusedGlobalSymbols
export default Document;
