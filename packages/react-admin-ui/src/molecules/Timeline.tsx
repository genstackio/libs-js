import Items from '../atoms/Items';
import TimelineItem from './TimelineItem';
import MuiTimeline from '@material-ui/lab/Timeline';
import { AsComponent } from '../as';
import { WithItemsOfTimeline } from '../withs';

const defaultItems = [];

export function Timeline({ className, items = defaultItems }: TimelineProps) {
    return (
        <MuiTimeline align={'left'} className={className}>
            <Items component={TimelineItem} items={items} />
        </MuiTimeline>
    );
}

export interface TimelineProps extends AsComponent, WithItemsOfTimeline {}

// noinspection JSUnusedGlobalSymbols
export default Timeline;
