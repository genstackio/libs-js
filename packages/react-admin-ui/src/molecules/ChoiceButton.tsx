import clsx from 'clsx';
import { box_color, box_variant, choice_button_item, class_name, children } from '../types';
import Clickable from '../atoms/Clickable';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import boxClass from '../utils/boxClass';
import Expandable from './Expandable';

export function ChoiceButton({ className, color, items = [], variant, children, expandedChildren }: ChoiceButtonProps) {
    const expandedSubChildren = (opened) => (
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
        <Expandable className={clsx('', className)} expandedChildren={expandedSubChildren}>
            {(opened) => (
                <Button
                    color={color}
                    variant={'contained'}
                    className={clsx('py-2 px-4 space-x-2 rounded inline-flex items center')}
                >
                    <span>{(opened ? expandedChildren || children : children) || ''}</span>
                    <Icon icon={opened ? 'expand_less' : 'expand_more'} />
                </Button>
            )}
        </Expandable>
    );
}

export interface ChoiceButtonProps {
    className?: class_name;
    color?: box_color;
    items: choice_button_item[];
    variant?: box_variant;
    children?: children;
    expandedChildren?: children;
}

export default ChoiceButton;
