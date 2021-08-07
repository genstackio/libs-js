import clsx from 'clsx';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import ReactPlayer from 'react-player';
import { useToggle } from '../hooks/useToggle';
import cornerClass from '../mappings/corners';
import {
    WithColorOfBox,
    WithButtonLabel,
    WithClassName,
    WithCorner,
    WithIcon,
    WithImage,
    WithPlayingIcon,
} from '../withs';

export function VideoPlayer({
    url,
    icon = 'fa-fas--play',
    playingIcon = 'fa-fas--pause',
    image,
    btnLabel,
    corner,
    color,
    className,
}: VideoPlayerProps) {
    const [video, toggle] = useToggle();

    return (
        <>
            <div
                className={clsx(
                    'relative w-full flex items-center justify-center overflow-hidden',
                    cornerClass(corner),
                    className,
                )}
            >
                <Image {...image} className={'flex-1'} />
                <Button
                    corner={btnLabel ? 'rounded' : 'circle'}
                    variant={'contained'}
                    size={btnLabel ? 'lg' : undefined}
                    color={color}
                    onClick={toggle}
                    icon={video ? playingIcon : icon}
                    iconSize={btnLabel ? 'lg' : '3xl'}
                    className={clsx(
                        'absolute',
                        btnLabel && 'h-14 left-0 bottom-0 m-10 overflow-hidden',
                        !btnLabel && 'flex items-center h-24 w-24 m-auto',
                        className,
                    )}
                >
                    {btnLabel}
                </Button>
                {video && (
                    <div className={'absolute top-0 w-full h-full'}>
                        <ReactPlayer
                            url={url}
                            width={'100%'}
                            height={'100%'}
                            playing={true}
                            controls
                            onEnded={toggle as () => void}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export interface VideoPlayerProps
    extends WithClassName,
        WithIcon,
        WithImage,
        WithColorOfBox,
        WithButtonLabel,
        WithCorner,
        WithPlayingIcon {
    url: string;
}

export default VideoPlayer;
