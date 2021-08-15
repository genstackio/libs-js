import clsx from 'clsx';
import ReactPlayer from 'react-player';
import Row from '../atoms/Row';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import { useToggle } from '../hooks/useToggle';
import { AsComponent } from '../as';
import { WithColorOfBox, WithButtonLabel, WithCorner, WithIcon, WithImage, WithPlayingIcon } from '../withs';

export function VideoPlayer({
    btnLabel,
    className,
    color,
    corner,
    icon = 'fa-fas--play',
    image,
    playingIcon = 'fa-fas--pause',
    url,
}: VideoPlayerProps) {
    const [video, toggle] = useToggle();

    return (
        <Row center corner={corner} full relative className={clsx('overflow-hidden', className)}>
            <Image {...image} className={'flex-1'} />
            <Button
                color={color}
                corner={btnLabel ? 'rounded' : 'circle'}
                icon={video ? playingIcon : icon}
                iconSize={btnLabel ? 'lg' : '3xl'}
                onClick={toggle}
                size={btnLabel ? 'lg' : undefined}
                variant={'contained'}
                className={clsx(
                    'absolute',
                    btnLabel && 'h-14 left-0 bottom-0 m-10 overflow-hidden',
                    !btnLabel && 'flex items-center h-24 w-24 ',
                    className,
                )}
                label={btnLabel}
            />
            {video && (
                <Div absolute full hfull className={'top-0'}>
                    <ReactPlayer
                        controls
                        height={'100%'}
                        onEnded={toggle as () => void}
                        playing
                        url={url}
                        width={'100%'}
                    />
                </Div>
            )}
        </Row>
    );
}

export interface VideoPlayerProps
    extends AsComponent,
        WithIcon,
        WithImage,
        WithColorOfBox,
        WithButtonLabel,
        WithCorner,
        WithPlayingIcon {
    url: string;
}

// noinspection JSUnusedGlobalSymbols
export default VideoPlayer;
