import clsx from 'clsx';
import Div, { DivProps } from './Div';

export function BlockContent({ className, p = 'sl', ...props }: BlockContentProps) {
    return <Div p={p} {...props} className={clsx('text-md', className)} />;
}

export type BlockContentProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default BlockContent;
