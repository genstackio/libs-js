import FieldLabel from '../FieldLabel';
import FieldError from '../FieldError';
import FieldHelper from '../FieldHelper';
import useField from '../../hooks/useField';
import FileUploader from '../../molecules/FileUploader';
import Image from '../../atoms/Image';
import { AsField } from '../../as';
import Div from '../Div';
import Button from '../Button';
import {useCallback} from "react";

const styles = {
    dropzone: { width: '100%', height: 200 },
    dropzoneActive: { borderColor: 'green' },
};

export function ImageField({ className, onChange, getUploadParams, value, ...props }: ImageFieldProps) {
    const { name, required, label, error, helper, placeholder, disabled, register, options, defaultValue, extra, classes } =
        useField({kind: 'image', ...props});

    const onFileUpload = useCallback((v: any) => {
        onChange && onChange({url: v.previewUrl});
    }, []);

    const onClear = useCallback(() => {
        onChange && onChange(undefined);
    }, [onChange]);
    return (
        <Div mt={'sm'} className={classes?.root}>
            <FieldLabel name={name} label={label} options={options} className={classes?.label} />
            {!!value && !!value.url && (
                <Div col>
                    <Image {...value} />
                    <Button label={'button_clear_label'} onClick={onClear} />
                </Div>
            )}
            {(!value || !value.url) && (
                <FileUploader
                    autoUpload
                    maxFile={1}
                    multiple={false}
                    canCancel={false}
                    inputContent={placeholder}
                    url={defaultValue}
                    disabled={disabled}
                    styles={styles}
                    name={name}
                    onFileUpload={onFileUpload}
                    getUploadParams={getUploadParams}
                    required={required}
                    {...register()}
                    {...extra}
                    className={className}
                />
            )}
            <FieldError error={error} className={classes?.error} />
            <FieldHelper helper={helper} className={classes?.helper} />
        </Div>
    );
}

export interface ImageFieldProps extends AsField {
    getUploadParams?: Function;
    value?: {url: string};
}

// noinspection JSUnusedGlobalSymbols
export default ImageField;
