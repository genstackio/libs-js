// noinspection JSUnusedLocalSymbols

import { forwardRef, useCallback } from 'react';
import Dropzone from 'react-dropzone-uploader/dist/react-dropzone-uploader';
import Column from '../atoms/Column';
import { rich_text } from '../types';
import { AsBox } from '../as';
import { WithDisabled, WithOnSubmit, WithPlaceholder, WithTitle } from '../withs';
import clsx from 'clsx';

const defaultStyles = {
    dropzone: {
        minHeight: 100,
        maxHeight: 250,
    },
};

const called: Record<string, boolean> = {};

export const FileUploader = forwardRef(
    (
        {
            styles = defaultStyles,
            className,
            nonEmptyPlaceholder,
            onFileAbort,
            onFileRemove,
            onFileUpload,
            onSubmit,
            placeholder,
            submitLabel,
            autoUpload = false,
            getUploadParams,
            autoSubmit = false,
            url,
            ...props
        }: FileUploaderProps,
        ref: any,
    ) => {
        const handleSubmit = useCallback(
            ({ meta }, allFiles) => {
                allFiles.forEach((f) => f.remove());
                onSubmit && onSubmit();
            },
            [onSubmit],
        );
        getUploadParams = getUploadParams || useCallback(() => ({ url: url }), [url]);
        const handleChangeStatus = useCallback(
            (xx, status) => {
                const { meta, file, remove } = xx;
                switch (status) {
                    case 'headers_received':
                        if (autoUpload) {
                            if (onFileUpload) {
                                onFileUpload(meta, { file, remove });
                                called[meta.url] = true;
                            }
                            autoSubmit && handleSubmit(xx, [{ remove }]);
                        }
                        break;
                    case 'done':
                        if (autoUpload) {
                            onFileUpload && !called[meta.url] && onFileUpload(meta, { file, remove });
                            autoSubmit && handleSubmit(xx, [{ remove }]);
                        }
                        delete called[meta.url];
                        break;
                    case 'removed':
                        delete called[meta.url];
                        onFileRemove && onFileRemove(meta, { file });
                        break;
                    case 'aborted':
                        if (autoUpload) {
                            remove();
                        }
                        delete called[meta.url];
                        onFileAbort && onFileAbort(meta, { file, remove });
                        break;
                }
            },
            [onFileUpload, onFileRemove, onFileAbort, autoUpload],
        );

        return (
            <Column b={'xs'} className={clsx('bg-clear cursor-pointer hover:bg-light', className)}>
                <Dropzone
                    getUploadParams={getUploadParams as any}
                    onChangeStatus={handleChangeStatus as any}
                    inputContent={placeholder}
                    inputWithFilesContent={nonEmptyPlaceholder || placeholder}
                    onSubmit={handleSubmit as any}
                    styles={styles}
                    submitButtonContent={submitLabel}
                    {...props}
                />
            </Column>
        );
    },
);

export interface FileUploaderProps extends AsBox, WithTitle, WithPlaceholder, WithOnSubmit, WithDisabled {
    accept?: string;
    styles?: any;
    nonEmptyPlaceholder?: string;
    onFileAbort?: Function;
    onFileRemove?: Function;
    onFileUpload?: Function;
    submitLabel?: rich_text;
    url?: string;
    getUploadParams?: Function;
    autoUpload?: boolean;
    maxSizeBytes?: number;
    minSizeBytes?: number;
    multiple?: boolean;
    maxFiles?: number;
    autoSubmit?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default FileUploader;
