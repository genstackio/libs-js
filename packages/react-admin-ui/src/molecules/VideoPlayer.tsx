import clsx from 'clsx';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ReactPlayer from 'react-player';
import { corner, rich_text } from '../types';
import { useToggle } from '../hooks/useToggle';
import cornerClass from '../mappings/corners';
import { WithBoxColor, WithClassName, WithIcon, WithImage } from '../withs';

export function VideoPlayer({ url, icon = 'play_arrow', image, btnLabel, corner, color, className }: VideoPlayerProps) {
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
                <Image {...image} className={'flex-1 '} />

                <>
                    <Button
                        corner={'rounded'}
                        variant={'contained'}
                        size={'lg'}
                        color={color}
                        onClick={toggle}
                        className={clsx('absolute h-24 w-80 m-10 overflow-hidden', cornerClass(corner), className)}
                    >
                        {!btnLabel ? <Icon icon={icon} size={'6xl'} /> : null} {btnLabel}{' '}
                    </Button>
                </>

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

export interface VideoPlayerProps extends WithClassName, WithIcon, WithImage, WithBoxColor {
    url: string;
    corner?: corner;
    btnLabel?: rich_text;
}

export default VideoPlayer;
