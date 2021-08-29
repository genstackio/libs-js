import Div from '../atoms/Div';
import MuiTimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithDescription, WithTitle } from '../withs';

export function TimelineItem({ className, color, description, last = false, title }: TimelineItemProps) {
    return (
        <Div className={className}>
            <MuiTimelineItem>
                <TimelineSeparator>
                    <TimelineDot color={color as any} variant={'outlined'} />
                    {!last && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent className={'-mt-4'}>
                    <p className={'text-md text-bold'}>{title}</p>
                    <p className={'text-sm text-disabled'}>{description}</p>
                </TimelineContent>
            </MuiTimelineItem>
        </Div>
    );
}

export interface TimelineItemProps extends AsComponent, WithTitle, WithDescription, WithColorOfBox {
    last?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default TimelineItem;
