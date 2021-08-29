import Div, { DivProps } from './Div';
import useBox from '../hooks/useBox';

export function Panel({ col = true, ...props }: PanelProps) {
    const [box, rest] = useBox(props, { color: 'primary', variant: 'contained' });

    return <Div box={box} col={col} flex p={'md'} responsive={false} spacebetween {...rest} />;
}

export type PanelProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default Panel;
