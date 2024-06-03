import { ssr_page_context_value } from '@genstackio/react-contexts/lib/types';

export function PageStyles({ context, styles: extraStyles = [] }: PageStylesProps) {
    const { assets = {}, styles = [], assetPrefix = '', assetEntrypoint } = context || {};

    const allStyles = [...styles, ...extraStyles];

    return (
        <>
            {(assets[assetEntrypoint || ''] || {}).css && (
                <link rel="stylesheet" href={`${assetPrefix}${assets[assetEntrypoint || ''].css}`} />
            )}
            {allStyles.map((v: any, i: number) => {
                if (/^(http[s]?:\/\/|\/[^\/\s*]+)/i.test(v)) {
                    return <link key={v as string} rel="stylesheet" href={v as string} />;
                }
                return <style key={i} dangerouslySetInnerHTML={{ __html: v as string }} />;
            })}
        </>
    );
}

export interface PageStylesProps {
    context?: ssr_page_context_value;
    styles?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default PageStyles;
