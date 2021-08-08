import clsx from 'clsx';
import { useCallback, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { WithImage, WithOnChange } from '../withs';
import { AsComponent } from '../as';

export function ImageCropper({ className, image, onChange }: ImageCropperProps) {
    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = useCallback(() => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        onChange && onChange(cropper.getCroppedCanvas().toDataURL(), cropper.getImageData());
    }, [onChange]);

    return image ? (
        <Cropper
            className={clsx('w-full', className)}
            src={image.url}
            initialAspectRatio={16 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
        />
    ) : null;
}

export interface ImageCropperProps extends AsComponent, WithImage, WithOnChange {}

// noinspection JSUnusedGlobalSymbols
export default ImageCropper;
