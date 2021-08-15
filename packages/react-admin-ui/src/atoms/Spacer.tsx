import VerticalSpacer from './spacers/VerticalSpacer';
import HorizontalSpacer from './spacers/HorizontalSpacer';
import { AsComponent } from '../as';
import { WithSizeOfSpacer, WithVariantOfSpace } from '../withs';

const components = {
    vertical: VerticalSpacer,
    horizontal: HorizontalSpacer,
    default: HorizontalSpacer,
};

export function Spacer({ variant = 'default', ...props }: SpacerProps) {
    const Component = components[variant] || components.default;

    return <Component {...props} />;
}

export interface SpacerProps extends AsComponent, WithVariantOfSpace, WithSizeOfSpacer {}

// noinspection JSUnusedGlobalSymbols
export default Spacer;
