import { useCallback, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { image } from '../types';

export function ImageCropper({ image, onChange }: ImageCropperProps) {
    const cropperRef = useRef<HTMLImageElement>(null);
    const onCrop = useCallback(() => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        onChange && onChange(cropper.getCroppedCanvas().toDataURL(), cropper.getImageData());
    }, [onChange]);

    return (
        <Cropper
            className={'w-full'}
            src={image.url}
            initialAspectRatio={16 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
        />
    );
}

export interface ImageCropperProps {
    image: image;
    onChange?: Function;
}

export default ImageCropper;
