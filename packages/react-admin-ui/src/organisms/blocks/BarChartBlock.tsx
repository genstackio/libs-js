import {BaseBlockProps, Block} from "../../atoms";
import Text from "../../atoms/Text";
import SettingsIcon from '@material-ui/icons/Settings';
import {BarChart, BarChartProps} from "../../molecules";

export function BarChartBlock({series, title, stats, subtitle, value, labels,...props}: BarChartBlockProps) {
    return (
        <Block title={title} {...props}>
            { subtitle && <div className={'flex justify-between items-center mb2'}>
                <div className={'flex items-center space-x-2'}>
                    <Text text={subtitle} variant={'body'} />
                    <Text text={value} color={'primary'} variant={'title6'} />
                </div>
                <SettingsIcon className={'animate-spin'}/>
            </div>}
            { stats && <Text text={`${stats}`} color={'dark'} variant={'title5'}/>}
            <BarChart color={props.color} labels={labels} series={series}/>
        </Block>
    );
}

export interface BarChartBlockProps extends BaseBlockProps, Omit<BarChartProps, "color">{
    title?: string,
    stats?: number,
    subtitle?: string,
    value?: string,
}

export default BarChartBlock;