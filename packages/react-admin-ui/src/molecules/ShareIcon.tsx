import Div from '../atoms/Div';
import { Icon } from '../atoms/Icon';
import shareIconTypeClass from '../mappings/share-icon-types';
import useBox from '../hooks/useBox';
import { AsBox } from '../as';
import { WithTarget } from '../withs';

export function ShareIcon({ className, target, ...props }: ShareIconProps) {
    const [box, item] = useBox(props);

    return (
        <Div box={box} center corner={'circle'} flex size={'sm'}>
            <Icon icon={shareIconTypeClass(item['type'] || 'default')} size={'xl'} color={box.color} onClick={target} />
        </Div>
    );
}

export interface ShareIconProps extends AsBox, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default ShareIcon;
