import {BaseBlockProps, Block} from "../../atoms";
import {CircleChart, CircleChartProps} from "../../molecules";

export function CircleChartBlock({icon, series, stats, subtitle, title, value, ...props}: CircleChartBlockProps) {
    return (
        <Block title={title} icon={'trending_up'} {...props}>
            <CircleChart color={props.color} series={series}/>
        </Block>
    );
}

export interface CircleChartBlockProps extends BaseBlockProps, Omit<CircleChartProps, "color">{
    icon?:string,
    stats?: number,
    subtitle?: string,
    title?: string,
    value?: string,
}

export default CircleChartBlock;