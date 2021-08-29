import Div from './Div';
import Text from './Text';
import { AsWrapper } from '../as';
import { WithTitle } from '../withs';

export function Section({ title, children }: SectionProps) {
    return (
        <Div>
            <Text text={title} variant={'sl'} />
            {!!title && !!children && <hr className={'my-4'} />}
            {children || ''}
        </Div>
    );
}

export interface SectionProps extends AsWrapper, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default Section;
