import Template from './Template';
export function PdfApp({ env, data = {} }: PdfAppProps) {
    return <Template {...data} env={env} />;
}

export interface PdfAppProps {
    data?: any;
    env: string;
}

// noinspection JSUnusedGlobalSymbols
export default PdfApp;
