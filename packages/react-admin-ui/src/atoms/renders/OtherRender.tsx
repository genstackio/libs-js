import Div from '../Div';
import Button from '../Button';

export function OtherRender({ url, isDirty, onClear, t }: OtherRenderProps) {
    return (
        <Div className={'text-center'}>
            <p>{url}</p>
            {isDirty && <p className={'m-4 text-center text-red-500'}>{t('field_file_dirty_label')}</p>}
            <Button size={'xs'} color={'danger'} label={t('button_clear_file_label')} onClick={onClear} />
        </Div>
    );
}

export interface OtherRenderProps {
    url: string;
    isDirty: boolean;
    onClear: any;
    t: any;
}

// noinspection JSUnusedGlobalSymbols
export default OtherRender;
