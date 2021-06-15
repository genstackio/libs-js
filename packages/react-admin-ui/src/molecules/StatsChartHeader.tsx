import {Text} from "../atoms/Text";
import {Icon} from "../atoms/Icon";
import {class_name, rich_text} from "../types";

export function StatsChartHeader({className, subTitle, stats, value}: StatsChartHeaderProps) {
    return (
        <div className={className}>
            {subTitle && <div className={'flex justify-between items-center mb2'}>
                <div className={'flex items-center space-x-2'}>
                    <Text text={subTitle} variant={'body'} />
                    <Text text={value} color={'primary'} variant={'title6'} />
                </div>
                <Icon icon={'settings'} className={'animate-spin'}/>
            </div>}
            {stats && <Text text={`${stats}`} color={'dark'} variant={'title5'}/>}
        </div>
    )
}

export interface StatsChartHeaderProps {
    className?: class_name,
    subTitle?: rich_text,
    stats?: number,
    value?: rich_text,
}

export default StatsChartHeader