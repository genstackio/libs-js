import {BaseBlockProps, Block} from "../../atoms";
import {CircleChart, CircleChartProps} from "../../molecules";

export function CircleChartBlock({series, title, stats, subtitle, value, icon, ...props}: CircleChartBlockProps) {
    return (
        <Block title={title} icon={'trending_up'} {...props}>
            <CircleChart color={props.color} series={series}/>
        </Block>
    );
}

export interface CircleChartBlockProps extends BaseBlockProps, Omit<CircleChartProps, "color">{
    title?: string,
    stats?: number,
    subtitle?: string,
    value?: string,
    icon?:string,
}

export default CircleChartBlock;