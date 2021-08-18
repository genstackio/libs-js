import clsx from 'clsx';
import Block from '../atoms/Block';
import HeadingText from '../atoms/HeadingText';
import Buttons from '../atoms/Buttons';
import positionClass from '../mappings/positions';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { AsBox } from '../as';
import { WithPush } from '../withs';

export function CallToActionSection({ className, buttonsPosition = 'right', ...props }: CallToActionSectionProps) {
    const [bProps, rest3] = useBlock(props);
    const [htProps, rest2] = useHeadingText(rest3);
    const [btProps] = useButtons(rest2);

    return (
        <Block
            {...bProps}
            contentClassName={clsx(
                'flex py-12 px-4 sm:px-6 lg:py-16 lg:px-8 justify-between xs:flex-col',
                positionClass(buttonsPosition),
            )}
        >
            <HeadingText {...htProps} titleClassName={'mb-2'} variant={'ctasection'} />
            <div className={clsx(className)}>
                <Buttons className={clsx(buttonsPosition === 'bottom' && 'mt-4')} {...btProps} />
            </div>
        </Block>
    );
}

export interface CallToActionSectionProps extends AsBox, WithPush {}

// noinspection JSUnusedGlobalSymbols
export default CallToActionSection;
