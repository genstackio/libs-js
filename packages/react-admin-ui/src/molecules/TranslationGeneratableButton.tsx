import { useCallback, useMemo, useState } from 'react';
import Spinner from '../atoms/Spinner';
import { Div, Icon } from '../atoms';
import useTranslateContext from '@genstackio/react-contexts/lib/hooks/useTranslateContext';
import { useFormContext } from 'react-hook-form';
import stopPrevent from '../utils/stopPrevent';
import useReferenceTranslationContext from '@genstackio/react-contexts/lib/hooks/useReferenceTranslationContext';

const defaultIconName = 'fa-fas--globe';

export function TranslationGeneratableButton({
    name,
    fieldName = undefined,
    targetLocale,
}: TranslationGeneratableButtonProps) {
    const { translateItem, iconName = defaultIconName } = useTranslateContext();
    const { setValue } = useFormContext();
    const fName = useMemo(() => fieldName || name, [fieldName, name]);
    const { referenceValue, referenceLocale } = useReferenceTranslationContext();
    const [{ loading }, setState] = useState<{
        data: unknown;
        loading: boolean;
        error?: unknown;
    }>({
        data: undefined,
        loading: false,
        error: undefined,
    });

    const onClick = useCallback(
        (event) => {
            stopPrevent(event);
            setState({ data: undefined, loading: true, error: undefined });
            const p = translateItem(name, referenceValue || '', referenceLocale, targetLocale);
            p.then((value) => {
                setState({ data: value, loading: false, error: undefined });
                setValue(fName, value);
            });
            p.catch((e) => {
                setState({ data: undefined, loading: false, error: e });
            });
        },
        [setState, setValue, translateItem, fName, referenceValue, referenceLocale, targetLocale],
    );

    return (
        <Div absolute className={'right-2 top-2 z-20 bg-clear flex items-center justify-center'}>
            {loading && <Spinner className={'ml-3'} />}
            {!loading && (
                <Icon
                    onClick={onClick}
                    className={'ml-4 cursor-pointer text-primary hover:text-secondary'}
                    icon={iconName}
                />
            )}
        </Div>
    );
}

export interface TranslationGeneratableButtonProps {
    name: string;
    fieldName?: string;
    targetLocale: string;
}

export default TranslationGeneratableButton;
