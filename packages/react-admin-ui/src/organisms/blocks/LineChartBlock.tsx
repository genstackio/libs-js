import {BaseBlockProps, Block} from "../../atoms";
import {LineChart} from "../../molecules/charts";

export function LineChartBlock({description, labels, series = [], title, ...props}: LineChartBlockProps) {
    return (
        <Block title={title} {...props}>
            <LineChart color={props.color} variant={props.variant} labels={labels} series={series} title={description} />
        </Block>
    );
}

export interface LineChartBlockProps extends BaseBlockProps {
    description?: string,
    labels?: string[],
    series?: number[][],
    title?: string,
}

export default LineChartBlock