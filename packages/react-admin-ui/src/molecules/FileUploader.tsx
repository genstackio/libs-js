import { useCallback } from 'react';
import Dropzone from 'react-dropzone-uploader/dist/react-dropzone-uploader';
import { Block } from '../atoms';
import { box_color, box_variant, class_name, rich_text } from '../types';

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
                        'flex flex-col px-4 py-6 bg-white text-blue tracking-wide uppercase ' +
                        'border border-blue cursor-pointer hover:bg-blue-300 hover:text-white'
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

export interface FileUploaderProps {
    className?: class_name;
    accept?: string;
    color?: box_color;
    dropzoneStyle?: any | null;
    nonEmptyPlaceholder?: string;
    onFileAbort?: Function;
    onFileRemove?: Function;
    onFileUpload?: Function;
    onSubmit?: Function;
    placeholder?: string;
    submitLabel?: rich_text;
    title?: rich_text;
    url?: string;
    variant?: box_variant;
}

export default FileUploader;
