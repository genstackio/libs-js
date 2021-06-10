import MuiSettingsIcon from '@material-ui/icons/Settings';
import {BaseBlockProps, Block, Text} from "../../atoms";
import {BarChart, BarChartProps} from "../../molecules";

export function BarChartBlock({labels, series, stats, subtitle, title, value, ...props}: BarChartBlockProps) {
    return (
        <Block title={title}  {...props}>
            { subtitle && <div className={'flex justify-between items-center mb2'}>
                <div className={'flex items-center space-x-2'}>
                    <Text text={subtitle} variant={'body'} />
                    <Text text={value} color={'primary'} variant={'title6'} />
                </div>
                <MuiSettingsIcon className={'animate-spin'}/>
            </div>}
            { stats && <Text text={`${stats}`} color={'dark'} variant={'title5'}/>}
            <BarChart color={props.color} labels={labels} series={series}/>
        </Block>
    );
}

export interface BarChartBlockProps extends BaseBlockProps, Omit<BarChartProps, "color">{
    stats?: number,
    subtitle?: string,
    title?: string,
    value?: string,
}

export default BarChartBlock;