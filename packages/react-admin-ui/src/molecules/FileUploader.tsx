import { useCallback } from 'react';
import Dropzone from 'react-dropzone-uploader/dist/react-dropzone-uploader';
import Block from '../atoms/Block';
import { rich_text } from '../types';
import { WithBox, WithClassName, WithOnSubmit, WithPlaceholder, WithTitle } from '../withs';

const defaultDropzoneStyle = {
    dropzone: {
        minHeight: 200,
        maxHeight: 250,
        border: 'none',
    },
    inputLabel: {
        color: 'darkblack',
    },
};

export function FileUploader({
    className,
    accept,
    dropzoneStyle = undefined,
    nonEmptyPlaceholder,
    placeholder,
    submitLabel,
    url,
    onFileAbort,
    onFileUpload,
    onFileRemove,
    onSubmit,
    ...props
}: FileUploaderProps) {
    dropzoneStyle = null === dropzoneStyle ? undefined : dropzoneStyle || defaultDropzoneStyle;
    const getUploadParams = useCallback(() => ({ url: url }), []);
    const handleChangeStatus = useCallback(
        ({ meta, file }, status) => {
            switch (status) {
                case 'done':
                    onFileUpload && onFileUpload(meta);
                    break;
                case 'removed':
                    onFileRemove && onFileRemove(meta);
                    break;
                case 'aborted':
                    onFileAbort && onFileAbort(meta);
                    break;
            }
        },
        [onFileUpload, onFileRemove, onFileAbort],
    );

    const handleSubmit = useCallback(
        ({ meta }, allFiles) => {
            allFiles.forEach((f) => f.remove());
            onSubmit && onSubmit();
        },
        [onSubmit],
    );

    return (
        <>
            <div id={'toast'} />
            <Block {...props}>
                <div
                    className={
                        'flex flex-col px-4 py-6 bg-clear text-info tracking-wide uppercase ' +
                        'border border-info cursor-pointer hover:bg-primary hover:text-clear'
                    }
                >
                    <Dropzone
                        inputContent={placeholder}
                        submitButtonContent={submitLabel}
                        inputWithFilesContent={nonEmptyPlaceholder || placeholder}
                        getUploadParams={getUploadParams as any}
                        onChangeStatus={handleChangeStatus as any}
                        onSubmit={handleSubmit as any}
                        accept={accept}
                        styles={dropzoneStyle as any}
                    />
                </div>
            </Block>
        </>
    );
}

export interface FileUploaderProps extends WithClassName, WithBox, WithTitle, WithPlaceholder, WithOnSubmit {
    accept?: string;
    dropzoneStyle?: any | null;
    nonEmptyPlaceholder?: string;
    onFileAbort?: Function;
    onFileRemove?: Function;
    onFileUpload?: Function;
    submitLabel?: rich_text;
    url?: string;
}

export default FileUploader;
