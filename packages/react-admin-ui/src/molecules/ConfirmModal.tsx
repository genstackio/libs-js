import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { flag } from '../types';
import { AsWrapper } from '../as';
import { WithKind, WithOnCancel, WithOnConfirm, WithOpened, WithTitle } from '../withs';

export function ConfirmModal({
    children,
    className,
    danger = false,
    kind = 'confirm',
    onCancel,
    onConfirm,
    opened = false,
    title,
}: ConfirmModalProps) {
    const { t } = useTranslation();
    const buttonsItems = useMemo(
        () =>
            danger
                ? ([
                      { target: onConfirm, label: t(`button_${kind}_label`), color: 'danger', variant: 'filled' },
                      {
                          target: onCancel,
                          label: t('button_cancel_label'),
                          color: 'primary',
                          variant: 'contained',
                          default: true,
                      },
                  ] as any)
                : ([
                      { target: onCancel, label: t('button_cancel_label'), color: 'secondary', variant: 'filled' },
                      {
                          target: onConfirm,
                          label: t(`button_${kind}_label`),
                          color: 'primary',
                          variant: 'contained',
                          default: true,
                      },
                  ] as any),
        [onCancel, onConfirm, t, kind, danger],
    );

    return (
        <Dialog
            aria-describedby={'alert-dialog-description'}
            aria-labelledby={'alert-dialog-title'}
            onClose={onCancel as any}
            open={opened}
            className={className}
        >
            <DialogTitle>{title || t(`modal_confirm_${'confirm' === kind ? 'generic' : kind}_title`)}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {children || t(`modal_confirm_${'confirm' === kind ? 'generic' : kind}_text`)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {buttonsItems.map(({ label, variant, color, target, default: autoFocus = false }, i) => (
                    <Button key={i} variant={variant} color={color} onClick={target} autoFocus={autoFocus}>
                        {label}
                    </Button>
                ))}
            </DialogActions>
        </Dialog>
    );
}

export interface ConfirmModalProps extends AsWrapper, WithTitle, WithOnCancel, WithOnConfirm, WithKind, WithOpened {
    danger?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default ConfirmModal;
