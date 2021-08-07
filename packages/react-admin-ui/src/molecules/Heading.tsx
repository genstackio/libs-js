import clsx from 'clsx';
import Text from '../atoms/Text';
import { WithClassName, WithText, WithColorOfText } from '../withs';

export function Heading({ className, text, color }: HeadingProps) {
    return (
        <div className={clsx('flex justify-between items-center border-b-2 my-8', className)}>
            <div className={'flex-col my-8'}>
                <Text className={'flex-1'} color={color} text={text} variant={'title5'} />
            </div>
        </div>
    );
}

export interface HeadingProps extends WithClassName, WithText, WithColorOfText {}

export default Heading;
