import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import Row from '../atoms/Row';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import MuiModal from '@material-ui/core/Modal';
import { action_item } from '../types';
import { AsWrapper } from '../as';
import { WithOpened, WithTitle } from '../withs';
import useAmbiance from '@genstackio/react-contexts/lib/hooks/useAmbiance';

const defaultButtonsItems = [];

export function Modal({
    buttonsItems = defaultButtonsItems,
    children,
    className,
    onClose,
    opened = false,
    title,
}: ModalProps) {
    const { modalCorner = 'rounded-md' } = useAmbiance();
    return (
        <MuiModal onClose={onClose} open={opened} className={clsx('flex justify-center items-center', className)}>
            <Div b={'xs'} full className={clsx('bg-clear border-disabled sm:w-8/12', modalCorner)}>
                <Row center m={'md'} responsive={false} reverse spaced>
                    <Button color={'dark'} label={'X'} onClick={onClose} />
                    {title && <div className={'text-xl font-bold'}>{title}</div>}
                </Row>
                <hr />
                {children || ''}
                {!!buttonsItems.length && (
                    <div>
                        <hr />
                        <Div flex m={'md'} spaced={4} className={'justify-end'}>
                            {buttonsItems.map(({ label, variant, color, target }, i) => (
                                <Button key={i} variant={variant} color={color} onClick={target}>
                                    {label}
                                </Button>
                            ))}
                        </Div>
                    </div>
                )}
            </Div>
        </MuiModal>
    );
}

export interface ModalProps extends AsWrapper, WithTitle, WithOpened {
    buttonsItems?: action_item[];
    onClose?: MouseEventHandler;
}

// noinspection JSUnusedGlobalSymbols
export default Modal;
