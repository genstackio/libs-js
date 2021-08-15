import clsx from 'clsx';
import Div from './Div';
import useBox from '../hooks/useBox';
import { AsBox } from '../as';
import { WithText } from '../withs';

export function Pill({ className, text, ...props }: PillProps) {
    const [box, rest] = useBox(props);

    return (
        <Div
            box={box}
            corner={'circle'}
            flex
            inline
            p={'xs'}
            className={clsx('text-xs font-bold uppercase text-clear', className)}
            {...rest}
        >
            {text}
        </Div>
    );
}

export interface PillProps extends AsBox, WithText {}

// noinspection JSUnusedGlobalSymbols
export default Pill;
