import { useCallback, useRef } from 'react';
import clsx from 'clsx';
import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import { AsComponent } from '../as';
import { WithImage, WithOnChange } from '../withs';

export function ImageCropper({ className, image, onChange }: ImageCropperProps) {
    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = useCallback(() => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        onChange && onChange(cropper.getCroppedCanvas().toDataURL(), cropper.getImageData());
    }, [onChange]);

    if (!image) return null;

    return (
        <Cropper
            crop={onCrop}
            guides={false}
            initialAspectRatio={16 / 9}
            ref={cropperRef}
            src={image.url}
            className={clsx('w-full', className)}
        />
    );
}

export interface ImageCropperProps extends AsComponent, WithImage, WithOnChange {}

// noinspection JSUnusedGlobalSymbols
export default ImageCropper;
