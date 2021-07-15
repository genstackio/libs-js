import clsx from 'clsx';
import { choice_button_item, children } from '../types';
import Clickable from '../atoms/Clickable';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import boxClass from '../utils/boxClass';
import Expandable from './Expandable';
import { WithBox, WithChildren, WithClassName } from '../withs';

export function ChoiceButton({ className, color, items = [], children, expandedChildren }: ChoiceButtonProps) {
    const expandedSubChildren = () => (
        <div className={'w-full shadow-lg'}>
            {items.map(({ label, active, target }, index) => (
                <Clickable
                    key={index}
                    onClick={target}
                    className={clsx(boxClass({ color: color, hoverable: active }), 'py-2 px-4 whitespace-no-wrap flex')}
                >
                    <Text text={label} />
                </Clickable>
            ))}
        </div>
    );

    return (
        <Expandable className={className} expandedChildren={expandedSubChildren}>
            {(opened) => (
                <Button
                    color={color}
                    variant={'contained'}
                    className={'py-2 px-4 space-x-2 rounded inline-flex items center'}
                >
                    <span>{(opened ? expandedChildren || children : children) || ''}</span>
                    <Icon icon={opened ? 'expand_less' : 'expand_more'} />
                </Button>
            )}
        </Expandable>
    );
}

export interface ChoiceButtonProps extends WithClassName, WithBox, WithChildren {
    items: choice_button_item[];
    expandedChildren?: children;
}

// noinspection JSUnusedGlobalSymbols
export default ChoiceButton;
