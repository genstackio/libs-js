import Div from '../atoms/Div';
import HeadingText from '../atoms/HeadingText';
import { AsComponent } from '../as';
import { WithText, WithColorOfText } from '../withs';

export function Heading({ className, text, color }: HeadingProps) {
    return (
        <Div b={'sm-b'} center flex spaced my={'xl'} className={className}>
            <Div col my={'xl'}>
                <HeadingText color={color} title={text} titleClassName={'flex-1'} variant={'smmd'} />
            </Div>
        </Div>
    );
}

export interface HeadingProps extends AsComponent, WithText, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default Heading;
