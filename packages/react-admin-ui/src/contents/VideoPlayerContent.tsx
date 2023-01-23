import VideoPlayer, { VideoPlayerProps } from '../molecules/VideoPlayer';

export function VideoPlayerContent(props: VideoPlayerContentProps) {
    return <VideoPlayer {...props} />;
}

export type VideoPlayerContentProps = VideoPlayerProps;

export default VideoPlayerContent;
