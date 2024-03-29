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
import stopPrevent from '../../utils/stopPrevent';

const styles = {
    dropzone: { width: '100%', minHeight: 100, maxHeight: 250, border: 'none' },
};

export function ImageUploadField({ className, onUploaded, ...props }: ImageUploadFieldProps) {
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
    } = useField({ kind: 'image', ...props });

    const handleChange = useCallback(
        (x: any) => (val: any, ctx: any) => {
            const xx = { _previewUrl: val.previewUrl, url: val.fileUrl, name: val.name, contentType: val.type };
            x && x(xx);
            onUploaded?.(xx, {
                ...ctx,
                onChange: x,
                reset: () => {
                    ctx.remove?.();
                    x({ url: undefined });
                },
            });
        },
        [],
    );

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
                        onChange && onChange({ url: undefined });
                    };
                    const url = !!value ? value._previewUrl || value.url : undefined;
                    const isDirty = !!value && !!value._previewUrl;
                    return (
                        <>
                            {!!url && (
                                <Div className={'text-center'}>
                                    <Div className={'text-center flex justify-center items-center'}>
                                        <div className={clsx('w-auto', rounded && 'rounded overflow-hidden')}>
                                            <Image
                                                className={clsx(
                                                    'w-full max-h-36',
                                                    rounded && 'rounded overflow-hidden',
                                                )}
                                                url={url}
                                                objectFit={'contain'}
                                            />
                                        </div>
                                    </Div>
                                    {isDirty && (
                                        <p className={'mt-1 text-sm text-center text-red-500'}>
                                            {t('field_image_dirty_label')}
                                        </p>
                                    )}
                                    <Button
                                        className={'mt-1 text-xxs py-1 px-2'}
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
                                    className={clsx('', classes?.uploader, rounded && 'rounded')}
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
    accept?: string;
    maxSizeBytes?: number;
    minSizeBytes?: number;
    autoSubmit?: boolean;
    onUploaded?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default ImageUploadField;
