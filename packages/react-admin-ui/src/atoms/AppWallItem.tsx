import { AsComponent } from '../as';
import Image from './Image';
import { WithTitle, WithImage, WithTarget } from '../withs';
import Text from './Text';
import Clickable from './Clickable';

export function AppWallItem({ image, title, target }: AppWallItemProps) {
    return (
        <Clickable className={'flex flex-col items-center w-16 h-16'} onClick={target}>
            <Image {...image} corner={'rounded'} />
            <Text text={title} variant={'description'} maxLen={12} ellipsis={'...'} />
        </Clickable>
    );
}

export interface AppWallItemProps extends AsComponent, WithImage, WithTitle, WithTarget {}

// noinspection JSUnusedGlobalSymbols
export default AppWallItem;
