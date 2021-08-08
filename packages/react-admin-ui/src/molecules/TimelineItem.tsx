import MuiTimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { WithColorOfBox, WithDescription, WithTitle } from '../withs';
import { AsComponent } from '../as';
import { flag } from '../types';

export function TimelineItem({ className, title, description, color, last = false }: TimelineItemProps) {
    return (
        <div className={className}>
            <MuiTimelineItem>
                <TimelineSeparator>
                    <TimelineDot variant={'outlined'} color={color as any} />
                    {!last && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent className={'-mt-4'}>
                    <p className={'text-md text-bold'}>{title}</p>
                    <p className={'text-sm text-disabled'}>{description}</p>
                </TimelineContent>
            </MuiTimelineItem>
        </div>
    );
}

export interface TimelineItemProps extends AsComponent, WithTitle, WithDescription, WithColorOfBox {
    last?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default TimelineItem;
