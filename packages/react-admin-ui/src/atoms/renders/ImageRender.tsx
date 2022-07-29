import Div from '../Div';
import Button from '../Button';

export function ImageRender({ url, name, isDirty, onClear, t }: ImageRenderProps) {
    return (
        <Div className={'text-center'}>
            <img alt={name} src={url} width={'100%'} />
            {isDirty && <p className={'m-4 text-center text-red-500'}>{t('field_file_dirty_label')}</p>}
            <Button size={'xs'} color={'danger'} label={t('button_clear_file_label')} onClick={onClear} />
        </Div>
    );
}

export interface ImageRenderProps {
    url: string;
    name: string;
    isDirty: boolean;
    onClear: any;
    t: any;
}

// noinspection JSUnusedGlobalSymbols
export default ImageRender;
