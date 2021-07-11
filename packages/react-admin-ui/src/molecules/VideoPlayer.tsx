import clsx from 'clsx';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ReactPlayer from 'react-player';
import { box_color, image, corner, class_name, icon } from '../types';
import { useToggle } from '../hooks/useToggle';
import cornerClass from '../mappings/corners';

export function VideoPlayer({ url, icon = 'play_arrow', image, corner, color, className }: VideoPlayerProps) {
    const [video, toggle] = useToggle();

    return (
        <div
            className={clsx(
                'relative w-full flex items-center justify-center overflow-hidden',
                cornerClass(corner),
                className,
            )}
        >
            <Image {...image} className={'flex-1'} />
            <Button
                corner={'circle'}
                className={'absolute h-24 w-24 m-auto'}
                onClick={toggle}
                color={color}
                variant={'contained'}
            >
                <Icon icon={icon} size={'6xl'} />
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
    );
}

export interface VideoPlayerProps {
    icon?: icon;
    className?: class_name;
    url: string;
    color?: box_color;
    corner?: corner;
    image: image;
    theme?: string;
}

export default VideoPlayer;
