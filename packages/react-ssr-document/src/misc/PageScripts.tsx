import { ssr_page_context_value } from '@genstackio/react-contexts/lib/types';

export function PageScripts({ extractor, scripts = [] }: PageScriptsProps) {
    const scriptTags = extractor?.getScriptTags() || undefined;

    return scriptTags || (scripts && scripts.length) ? (
        <>
            {!!scriptTags && <div dangerouslySetInnerHTML={{ __html: scriptTags }} />}
            {scripts.map((v: any, i: number) => {
                if (/^(http[s]?:\/\/|\/[^\/\s*]+)/i.test(v)) {
                    return <script key={v as string} type={'application/javascript'} src={v as string} />;
                }
                return (
                    <script key={i} type={'application/javascript'} dangerouslySetInnerHTML={{ __html: v as string }} />
                );
            })}
        </>
    ) : null;
}

export interface PageScriptsProps {
    context?: ssr_page_context_value;
    extractor?: any;
    scripts?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default PageScripts;
