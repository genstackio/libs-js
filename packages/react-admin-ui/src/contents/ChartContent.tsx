import Chart, {ChartProps} from "../atoms/Chart";

export function ChartContent(props: ChartContentProps) {
    return (
        <Chart {...props} />
    );
}

export interface ChartContentProps extends ChartProps {
}

export default ChartContent;
