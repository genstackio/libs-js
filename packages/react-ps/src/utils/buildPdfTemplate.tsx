import { Fragment } from 'react';
import StandardPdf from '../molecules/StandardPdf';
import Main from '../molecules/Main';

export function buildPdfTemplate(def: any) {
    return function BuiltDynamicPdfTemplate({ type }) {
        return (
            <StandardPdf>
                <Main>
                    {def.modules?.map((m: any, i: number) => (
                        <Fragment key={i} {...m} />
                    ))}
                </Main>
            </StandardPdf>
        );
    };
}

export default buildPdfTemplate;
