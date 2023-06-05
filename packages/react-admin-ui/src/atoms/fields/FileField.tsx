import { useCallback } from 'react';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import FileUploader from '../../molecules/FileUploader';
import { AsField } from '../../as';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import stopPrevent from '../../utils/stopPrevent';
import { ImageRender, OtherRender, PdfRender } from '../renders';
const styles = {
    dropzone: { width: '100%', minHeight: 100, maxHeight: 250, border: 'none' },
};

const mapping = {
    'application/pdf': 'pdf',
    'image/png': 'img',
    'image/jpeg': 'img',
    'image/jpg': 'img',
    'image/svg+xml': 'img',
    pdf: 'pdf',
    png: 'img',
    jpeg: 'img',
    jpg: 'img',
    svg: 'img',
};

const getFileTypeFromContentTypeOrFilename = (v) => {
    return mapping[v?.contentType || getFileNameExtension(v?.url || '')] || 'other';
};
const getFileNameExtension = (v: string) => {
    return v.slice(v.lastIndexOf('.') + 1);
};
const fileTypeComponents = {
    pdf: PdfRender,
    img: ImageRender,
    other: OtherRender,
};

export function FileField({ className, ...props }: FileFieldProps) {
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
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        center,
        rounded,
    } = useField({ kind: 'file', ...props });

    const handleChange = useCallback(
        (x: any) => (val: any) => {
            const xx = { _previewUrl: val.previewUrl, url: val.fileUrl, name: val.name, contentType: val.type };
            x && x(xx);
        },
        [],
    );

    const fileType = getFileTypeFromContentTypeOrFilename(defaultValue);
    const Comp = fileTypeComponents[fileType || ''];

    return (
        <FieldSet
            error={error}
            helper={helper}
            label={label}
            name={name}
            options={options}
            className={className}
            labelFormat={labelFormat}
            labelClassName={labelClassName}
            errorClassName={errorClassName}
            helperClassName={helperClassName}
            center={center}
            rounded={rounded}
        >
            <Controller
                control={control}
                defaultValue={defaultValue}
                name={name}
                render={({ field: { ref, value, onChange, ...field } }: any) => {
                    const onClear = (e: any) => {
                        stopPrevent(e);
                        onChange && onChange(undefined);
                    };
                    const url = !!value ? value._previewUrl || value.url : undefined;
                    const name = !!value ? value.name || 'has-file' : undefined;
                    const isDirty = !!value && !!value._previewUrl;
                    return (
                        <>
                            {!!url && <Comp url={url} name={name} isDirty={isDirty} onClear={onClear} t={t} />}
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

export interface FileFieldProps extends AsField {
    value?: { url: string };
    accept?: string;
    maxSizeBytes?: number;
    minSizeBytes?: number;
}

// noinspection JSUnusedGlobalSymbols
export default FileField;
