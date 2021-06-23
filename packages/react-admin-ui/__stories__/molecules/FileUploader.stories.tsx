import { useCallback } from 'react';
import { s, a } from '../utils';
import { FileUploader } from '../../src';

export default {
    title: 'Molecules/FileUploader',
    component: FileUploader,
    argTypes: a({
        accept: { control: { type: 'text' } },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
        },
        variant: { control: { type: 'select' }, options: ['filled', 'outlined', 'contained'] },
    }),
};

const Template = (args) => <FileUploader {...args} />;
const Uploader = (props) => {
    const toast = useCallback((color, message) => {
        const el = document.getElementById('toast');
        const classes =
            'rounded-t-md mb-2 w-48 bg-opacity-25 bg-blue-500 border-blue-700 border-l-4 py-2 px-3 shadow-md mb-2';
        if (el !== null) {
            el.innerHTML = message;
            el.className = classes;
            setTimeout(() => {
                el.className = el.className.replace(classes, '');
                el.innerHTML = '';
            }, 3000);
        }
    }, []);

    const onFileUpload = useCallback(
        (meta) => {
            toast('blue', `${meta.name} uploaded.`);
        },
        [toast],
    );

    const onFileRemove = useCallback(
        (meta) => {
            toast('green', `${meta.name} removed.`);
        },
        [toast],
    );

    const onFileAbort = useCallback(
        (meta) => {
            toast('red', `${meta.name} aborted.`);
        },
        [toast],
    );

    const onSubmit = useCallback(() => {
        toast('yellow', `submitted.`);
    }, [toast]);

    return (
        <Template
            {...props}
            onFileUpload={onFileUpload}
            onFileRemove={onFileRemove}
            onFileAbort={onFileAbort}
            onSubmit={onSubmit}
        />
    );
};

export const basic = s(Uploader, {});
export const customized = s(Uploader, {
    title: 'Upload project file',
    placeholder: 'Drop a file',
    submitLabel: 'Go send it',
    nonEmptyPlaceholder: 'Add other file',
    url: 'https://httpbin.org/post',
    handleChangeStatusDone: 'uploaded :)',
    handleChangeStatusRemove: 'removed :(',
    handleChangeStatusAborted: 'upload failed... :)',
    handleSubmitDone: 'upload OK ^^',
});
export const onlyMedia = s(Uploader, {
    accept: 'image/*,audio/*,video/*',
});
export const unstyled = s(Uploader, {
    dropzoneStyle: null,
});
