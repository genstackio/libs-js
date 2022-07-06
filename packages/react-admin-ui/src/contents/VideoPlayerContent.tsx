import VideoPlayer, {VideoPlayerProps} from "../molecules/VideoPlayer";

export function VideoPlayerContent(props: VideoPlayerContentProps) {
    return (
        <VideoPlayer {...props} />
    );
}

export interface VideoPlayerContentProps extends VideoPlayerProps {
}

export default VideoPlayerContent;
