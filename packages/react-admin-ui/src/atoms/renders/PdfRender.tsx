import Div from '../Div';
import Button from '../Button';

export function PdfRender({ url, name, isDirty, onClear, t }: PdfRenderProps) {
    return (
        <Div className={'text-center'}>
            <iframe
                title={name}
                className={'border'}
                src={`${url}#toolbar=1&navpanes=0&scrollbar=0`}
                width={'100%'}
                height={400}
            />
            {isDirty && <p className={'m-4 text-center text-red-500'}>{t('field_file_dirty_label')}</p>}
            <Button size={'xs'} color={'danger'} label={t('button_clear_file_label')} onClick={onClear} />
        </Div>
    );
}

export interface PdfRenderProps {
    url: string;
    name: string;
    isDirty: boolean;
    onClear: any;
    t: any;
}

// noinspection JSUnusedGlobalSymbols
export default PdfRender;
