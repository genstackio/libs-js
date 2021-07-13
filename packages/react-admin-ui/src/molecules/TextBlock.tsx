import clsx from 'clsx';
import textClass from '../utils/textClass';
import Block, { BaseBlockProps } from '../atoms/Block';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { WithIcon, WithText, WithTitle } from '../withs';

export function TextBlock({ icon, text, title, ...props }: TextBlockProps) {
    return (
        <Block {...props}>
            {title && (
                <div
                    className={clsx(
                        textClass({ color: props.color, variant: props.variant }),
                        'flex justify-between items-center',
                    )}
                >
                    <div className={'flex-col'}>
                        <Text className={'flex-1'} text={title} variant={'title5'} />
                        <div className={'text-md flex-1'}>
                            <Text text={text || ''} variant={'body'} />
                        </div>
                    </div>
                    <Icon icon={icon} />
                </div>
            )}
        </Block>
    );
}

export interface TextBlockProps extends BaseBlockProps, WithText, WithTitle, WithIcon {}

export default TextBlock;
