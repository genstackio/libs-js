import MuiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { WithClassName, WithItemsOfTimeline } from '../withs';

export function Timeline({ className, items = [] }: TimelineProps) {
    return (
        <MuiTimeline align={'left'} className={className}>
            {items.map((item, index) => (
                <div key={index}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant={'outlined'} color={item.color as any} />
                            {index !== items.length - 1 ? <TimelineConnector /> : ''}
                        </TimelineSeparator>
                        <TimelineContent className={'-mt-4'}>
                            <p className={'text-md text-bold'}>{item.title}</p>
                            <p className={'text-sm text-disabled'}>{item.description}</p>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            ))}
        </MuiTimeline>
    );
}

export interface TimelineProps extends WithClassName, WithItemsOfTimeline {}

// noinspection JSUnusedGlobalSymbols
export default Timeline;
