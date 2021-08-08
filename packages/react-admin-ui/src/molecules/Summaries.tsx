import clsx from 'clsx';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { WithItemsOfSummaries } from '../withs';
import { AsComponent } from '../as';

export function Summaries({ className, items }: SummariesProps) {
    return items ? (
        <div className={clsx(`grid grid-flow-col grid-cols-${items.length} divide-x`, className)}>
            {items.slice(0, 3).map(({ value, unit, color, percentage, icon }, index) => (
                <div className={'text-center'} key={index}>
                    <div className={'flex justify-center'}>
                        <Text text={`${percentage}` + ' %'} variant={'description'} className={'text-center'} />
                        {percentage > 0 && <Icon icon={'keyboard_arrow_up'} />}
                        {percentage < 0 && <Icon icon={'keyboard_arrow_down'} />}
                    </div>
                    <Text text={unit} color={'dark'} variant={'description'} />
                    <Text text={value} color={'dark'} variant={'title6'} />
                </div>
            ))}
        </div>
    ) : null;
}

export interface SummariesProps extends AsComponent, WithItemsOfSummaries {}

// noinspection JSUnusedGlobalSymbols
export default Summaries;
