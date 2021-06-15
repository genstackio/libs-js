import {BaseBlockProps, Block} from "../../atoms";
import {RadarChart} from "../../molecules";

export function RadarChartBlock({labels, series, ...props}: RadarChartBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <RadarChart color={props.color} variant={props.variant} isMenu={false} labels={labels} series={series} />
        </Block>
    );
}

export interface RadarChartBlockProps extends BaseBlockProps {
    dropdownItems?: {
        name?: string
    }[],
    labels?: string[],
    series?: {
        name?: string,
        data?: number[]
    }[],
    title?: string,
}

export default RadarChartBlock