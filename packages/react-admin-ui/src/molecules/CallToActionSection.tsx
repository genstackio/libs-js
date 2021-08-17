import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import Block from '../atoms/Block';
import { AsBox } from '../as';
import { WithPush } from '../withs';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';

export function CallToActionSection({ className, ...props }: CallToActionSectionProps) {
    const [bProps, rest3] = useBlock(props);
    const [htProps, rest2] = useHeadingText(rest3);
    const [btProps] = useButtons(rest2);
    return (
        <Block
            {...bProps}
            contentClassName={'flex py-12 px-4 sm:px-6 lg:py-16 lg:px-8 justify-between items-center xs:flex-col'}
        >
            <HeadingText {...htProps} titleClassName={'mb-2'} variant={'ctasection'} />
            <div className={className}>
                <Buttons className={'mb-2 px-5 py-3'} btnLabel={'Get Started'} btn2Label={'Learn more'} {...btProps} />
            </div>
        </Block>
    );
}

export interface CallToActionSectionProps extends AsBox, WithPush {}

// noinspection JSUnusedGlobalSymbols
export default CallToActionSection;
