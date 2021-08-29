import Text from '../atoms/Text';
import Column from '../atoms/Column';
import { AsComponent } from '../as';
import { WithTitle, WithDescription } from '../withs';

export function HeadingLeft({ className, description, title }: HeadingLeftProps) {
    return (
        <Column spaced={2} className={className}>
            <Text text={title} variant={'body'} />
            <Text text={description} variant={'description'} />
        </Column>
    );
}

export interface HeadingLeftProps extends AsComponent, WithTitle, WithDescription {}

// noinspection JSUnusedGlobalSymbols
export default HeadingLeft;
