import { useMemo } from 'react';
import clsx from 'clsx';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import Clickable from '../atoms/Clickable';
import Expandable from './Expandable';
import boxClass from '../mappings/boxs';
import { children } from '../types';
import { AsBoxWrapper } from '../as';
import { WithItemsOfChoiceButton } from '../withs';

export function ChoiceButton({ children, className, color, expandedChildren, items = [] }: ChoiceButtonProps) {
    const expandedSubChildren = useMemo(
        () => (
            <Div full className={'shadow-lg'}>
                {items.map(({ label, active, target }, index) => (
                    <Clickable
                        key={index}
                        onClick={target}
                        className={clsx(
                            boxClass({ color: color, hoverable: active }),
                            'py-2 px-4 whitespace-no-wrap flex',
                        )}
                    >
                        <Text text={label} />
                    </Clickable>
                ))}
            </Div>
        ),
        [color],
    );

    return (
        <Expandable expandedChildren={expandedSubChildren} className={className}>
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

export interface ChoiceButtonProps extends AsBoxWrapper, WithItemsOfChoiceButton {
    expandedChildren?: children;
}

// noinspection JSUnusedGlobalSymbols
export default ChoiceButton;
