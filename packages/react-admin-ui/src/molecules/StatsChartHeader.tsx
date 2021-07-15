import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { rich_text } from '../types';
import { WithClassName, WithSubtitle } from '../withs';

export function StatsChartHeader({ className, subtitle, stats, value }: StatsChartHeaderProps) {
    return (
        <div className={className}>
            {subtitle && (
                <div className={'flex justify-between items-center mb2'}>
                    <div className={'flex items-center space-x-2'}>
                        <Text text={subtitle} variant={'body'} />
                        <Text text={value} color={'primary'} variant={'title6'} />
                    </div>
                    <Icon icon={'settings'} className={'animate-spin'} />
                </div>
            )}
            <Text text={`${stats}`} color={'dark'} variant={'title5'} />
        </div>
    );
}

export interface StatsChartHeaderProps extends WithClassName, WithSubtitle {
    stats?: number;
    value?: rich_text;
}

export default StatsChartHeader;
