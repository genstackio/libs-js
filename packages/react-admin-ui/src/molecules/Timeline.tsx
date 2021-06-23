import MuiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { timeline_item } from '../types';

export function Timeline({ items }: TimelineProps) {
    return (
        <MuiTimeline align={'left'}>
            {items.map((item, index) => (
                <div key={index}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant={'outlined'} color={item.color as any} />
                            {index !== items.length - 1 ? <TimelineConnector /> : ''}
                        </TimelineSeparator>
                        <TimelineContent className={'-mt-4'}>
                            <p className={'text-md text-bold'}>{item.title}</p>
                            <p className={'text-sm text-gray-400'}>{item.description}</p>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            ))}
        </MuiTimeline>
    );
}

export interface TimelineProps {
    items: timeline_item[];
}

export default Timeline;
