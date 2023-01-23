import { useCallback } from 'react';
import Image from '../Image';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import FileUploader from '../../molecules/FileUploader';
import { AsField } from '../../as';
import Div from '../Div';
import Button from '../Button';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

const styles = {
    dropzone: { width: '100%', minHeight: 100, maxHeight: 250, border: 'none' },
};

export function ImageUploadField({ className, ...props }: ImageUploadFieldProps) {
    const { t } = useTranslation();

    const {
        getUploadParams,
        name,
        label,
        error,
        helper,
        disabled,
        placeholder,
        options,
        defaultValue,
        extra,
        control,
        required,
        register,
        classes,
    } = useField({ kind: 'image', ...props });

    const handleChange = useCallback(
        (x: any) => (val: any) => {
            const xx = { _previewUrl: val.previewUrl, url: val.fileUrl, name: val.name, contentType: val.type };
            x && x(xx);
        },
        [],
    );

    return (
        <FieldSet error={error} helper={helper} label={label} name={name} options={options} className={className}>
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({ field: { ref, value, onChange, ...field } }: any) => {
                    const onClear = (e: any) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onChange && onChange(undefined);
                    };
                    const url = !!value ? value._previewUrl || value.url : undefined;
                    const isDirty = !!value && !!value._previewUrl;
                    return (
                        <>
                            {!!url && (
                                <Div className={'text-center'}>
                                    <Image className={'w-full max-h-36'} url={url} objectFit={'contain'} />
                                    {isDirty && (
                                        <p className={'m-4 text-center text-red-500'}>{t('field_image_dirty_label')}</p>
                                    )}
                                    <Button
                                        size={'xs'}
                                        color={'danger'}
                                        label={t('button_clear_image_label')}
                                        onClick={onClear}
                                    />
                                </Div>
                            )}
                            {!url && (
                                <FileUploader
                                    {...field}
                                    autoUpload
                                    maxFile={1}
                                    multiple={false}
                                    canCancel={false}
                                    inputContent={placeholder}
                                    url={undefined}
                                    disabled={disabled}
                                    styles={styles}
                                    name={name}
                                    getUploadParams={getUploadParams}
                                    required={required}
                                    onFileUpload={handleChange(onChange)}
                                    {...register()}
                                    {...extra}
                                    className={clsx('', classes?.uploader)}
                                />
                            )}
                        </>
                    );
                }}
            />
        </FieldSet>
    );
}

export interface ImageUploadFieldProps extends AsField {
    value?: { url: string };
}

// noinspection JSUnusedGlobalSymbols
export default ImageUploadField;
