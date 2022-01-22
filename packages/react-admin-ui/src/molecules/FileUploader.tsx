import { useCallback } from 'react';
import Dropzone from 'react-dropzone-uploader/dist/react-dropzone-uploader';
import Block from '../atoms/Block';
import Column from '../atoms/Column';
import useBlock from '../hooks/useBlock';
import { rich_text } from '../types';
import { AsBox } from '../as';
import { WithOnSubmit, WithPlaceholder, WithTitle } from '../withs';

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
    accept,
    dropzoneStyle = undefined,
    className,
    nonEmptyPlaceholder,
    onFileAbort,
    onFileRemove,
    onFileUpload,
    onSubmit,
    placeholder,
    submitLabel,
    url,
    ...props
}: FileUploaderProps) {
    const [bProps] = useBlock(props);
    dropzoneStyle = null === dropzoneStyle ? undefined : dropzoneStyle || defaultDropzoneStyle;
    const getUploadParams = useCallback(() => ({ url: url }), [url]);
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
            <Block {...bProps}>
                <Column
                    p={'md'}
                    b={'xs'}
                    className={
                        'bg-clear text-info tracking-wide uppercase ' +
                        'border-info cursor-pointer hover:bg-primary hover:text-clear'
                    }
                >
                    <Dropzone
                        accept={accept}
                        getUploadParams={getUploadParams as any}
                        inputContent={placeholder}
                        inputWithFilesContent={nonEmptyPlaceholder || placeholder}
                        onChangeStatus={handleChangeStatus as any}
                        onSubmit={handleSubmit as any}
                        styles={dropzoneStyle as any}
                        submitButtonContent={submitLabel}
                    />
                </Column>
            </Block>
        </>
    );
}

export interface FileUploaderProps extends AsBox, WithTitle, WithPlaceholder, WithOnSubmit {
    accept?: string;
    dropzoneStyle?: any | null;
    nonEmptyPlaceholder?: string;
    onFileAbort?: Function;
    onFileRemove?: Function;
    onFileUpload?: Function;
    submitLabel?: rich_text;
    url?: string;
}

// noinspection JSUnusedGlobalSymbols
export default FileUploader;
