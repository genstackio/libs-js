import {BaseBlockProps, Block} from "../../atoms";
import {RadarChart} from "../../molecules";

export function RadarChartBlock({title, dropdownItems, labels, series, ...props}: RadarChartBlockProps) {
    return (
        <Block padding={'none'} title={title} {...props} dropdownItems={dropdownItems}>
            <RadarChart color={props.color} variant={props.variant} isMenu={false} labels={labels} series={series} />
        </Block>
    );
}

export interface RadarChartBlockProps extends BaseBlockProps {
    title?: string,
    dropdownItems?: {name?: string}[],
    labels?: string[],
    series?: {name?: string, data?: number[]}[],
}

export default RadarChartBlock