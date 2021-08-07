import { WithButtons, WithClassName } from '../withs';
import Items from './Items';
import Button from './Button';

export function Buttons({ className, buttons = [] }: ButtonsProps) {
    return <Items items={buttons} component={Button} className={'mr-2'} container containerClassName={className} />;
}

export interface ButtonsProps extends WithClassName, WithButtons {}

export default Buttons;
