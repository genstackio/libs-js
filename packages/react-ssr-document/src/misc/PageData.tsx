import serialize from 'serialize-javascript';
import { ssr_page_context_value } from '@genstackio/react-contexts/lib/types';

export function PageData({ context }: PageDataProps) {
    return context ? (
        <script
            defer
            dangerouslySetInnerHTML={{
                __html: `window.__PAGE_CONTEXT__ =  ${serialize({
                    ...context,
                })}`,
            }}
        />
    ) : null;
}

export interface PageDataProps {
    context?: ssr_page_context_value;
}

export default PageData;
