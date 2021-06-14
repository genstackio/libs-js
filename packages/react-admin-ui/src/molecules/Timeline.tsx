import MuiTimeline from '@material-ui/lab/Timeline';
import MuiTimelineItem from '@material-ui/lab/TimelineItem';
import MuiTimelineSeparator from '@material-ui/lab/TimelineSeparator';
import MuiTimelineConnector from '@material-ui/lab/TimelineConnector';
import MuiTimelineContent from '@material-ui/lab/TimelineContent';
import MuiTimelineDot from '@material-ui/lab/TimelineDot';
import {timeline_item} from "../types";

export function Timeline({items}) {
    return (
            <MuiTimeline align={'left'}>
                {items.map((item, index) => (
                    <div key={index}>
                    <MuiTimelineItem>
                            <MuiTimelineSeparator>
                                <MuiTimelineDot variant={'outlined'} color={item.color} />
                                {index !== (items.length - 1) ? <MuiTimelineConnector /> : ''}
                            </MuiTimelineSeparator>
                            <MuiTimelineContent className={'-mt-4'}>
                                <p className={'text-md text-bold'}>{item.title}</p>
                                <p className={'text-sm text-gray-400'}>{item.description}</p>
                            </MuiTimelineContent>
                    </MuiTimelineItem>
                    </div>
                ))}
            </MuiTimeline>
    );
}

export interface TimelineProps {
    items: timeline_item[],
}

export default Timeline