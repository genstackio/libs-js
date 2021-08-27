import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Avatar from 'react-avatar-edit';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import { box_variant } from '../mappings/box-variants';
import useDeviceTypeConfig from '../hooks/useDeviceTypeConfig';
import { AsComponent } from '../as';
import { WithBox, WithButton, WithOnChange } from '../withs';

const defaultState = { preview: '', src: '' };
const deviceTypeConfigs = {
    mobile: { width: 300, height: 300 },
    tablet: { width: 250, height: 250 },
    desktop: { width: 300, height: 300 },
};

export function ImageUploader({
    className,
    btnClassName,
    btnColor,
    btnCorner,
    btnIcon,
    btnEndIcon,
    btnType,
    btnLabel,
    btnSize,
    onChange,
    maxFileSize = 2000000,
}: ImageUploaderProps) {
    const [state, setState] = useState(defaultState);
    const { width, height } = useDeviceTypeConfig(deviceTypeConfigs);

    const onClose = useCallback(() => setState(defaultState), [setState]);
    const onCrop = useCallback((preview) => setState({ preview, src: '' }), [setState]);
    const onBeforeFileLoad = useCallback(
        (elem) => {
            if (elem.target.files[0].size > maxFileSize) {
                alert('File is too big!');
                elem.target.value = '';
            }
        },
        [maxFileSize],
    );

    const handleChange = useCallback(() => {
        onChange && onChange(state.preview);
    }, [onChange, state]);

    return (
        <Div flex className={clsx(className, 'items-center sm:flex-col')}>
            <Avatar
                width={width}
                height={height}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={state.src}
            />
            {!!state.preview && (
                <Div flex className={'flex-col ml-32 sm:ml-0'}>
                    <Div className={'w-32 py-2'}>
                        <Image url={state.preview} alt={'Preview'} />
                    </Div>
                    <Button
                        label={btnLabel}
                        onClick={handleChange}
                        variant={btnType as box_variant}
                        color={btnColor}
                        icon={btnIcon}
                        endIcon={btnEndIcon}
                        className={btnClassName}
                        size={btnSize}
                        corner={btnCorner}
                    />
                </Div>
            )}
        </Div>
    );
}

export interface ImageUploaderProps extends AsComponent, WithOnChange, WithBox, WithButton {
    maxFileSize?: number;
}

// noinspection JSUnusedGlobalSymbols
export default ImageUploader;
