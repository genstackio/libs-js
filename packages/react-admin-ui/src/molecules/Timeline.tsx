import MuiTimeline from '@material-ui/lab/Timeline';
import { WithItemsOfTimeline } from '../withs';
import { AsComponent } from '../as';
import Items from '../atoms/Items';
import TimelineItem from './TimelineItem';

export function Timeline({ className, items = [] }: TimelineProps) {
    return (
        <MuiTimeline align={'left'} className={className}>
            <Items items={items} component={TimelineItem} />
        </MuiTimeline>
    );
}

export interface TimelineProps extends AsComponent, WithItemsOfTimeline {}

// noinspection JSUnusedGlobalSymbols
export default Timeline;
