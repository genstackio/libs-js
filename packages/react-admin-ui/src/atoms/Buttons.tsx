import { WithButtons } from '../withs';
import Items from './Items';
import Button from './Button';
import { AsComponent } from '../as';

export function Buttons({ className, buttons = [] }: ButtonsProps) {
    return <Items items={buttons} component={Button} className={'mr-2'} container containerClassName={className} />;
}

export interface ButtonsProps extends AsComponent, WithButtons {}

// noinspection JSUnusedGlobalSymbols
export default Buttons;
