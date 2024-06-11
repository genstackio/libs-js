import { useCallback, useMemo, useState } from 'react';
import Spinner from '../atoms/Spinner';
import { Div, Icon } from '../atoms';
import useGenerateContext from '@genstackio/react-contexts/lib/hooks/useGenerateContext';
import { useFormContext } from 'react-hook-form';
import stopPrevent from '../utils/stopPrevent';

const defaultIconName = 'fa-fas--magic';

export function GeneratableButton({ name, fieldName = undefined }: GeneratableButtonProps) {
    const { generateItem, iconName = defaultIconName } = useGenerateContext();
    const { setValue } = useFormContext();
    const fName = useMemo(() => fieldName || name, [fieldName, name]);

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
            const p = generateItem(name);
            p.then((value) => {
                setState({ data: value, loading: false, error: undefined });
                setValue(fName, value);
            });
            p.catch((e) => {
                setState({ data: undefined, loading: false, error: e });
            });
        },
        [setState, setValue, generateItem, fName],
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

export interface GeneratableButtonProps {
    name: string;
    fieldName?: string;
}

export default GeneratableButton;
