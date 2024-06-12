import { useCallback, useMemo, useState } from 'react';
import Translatable from '../organisms/Translatable';

export function useTranslatable(
    fieldName: string,
    translatable: string,
    type: string | undefined,
    translationGeneratable: string | undefined,
) {
    const [opened, setOpened] = useState(false);
    const onToggleModal = useCallback(() => {
        setOpened(!opened);
    }, [setOpened, opened]);

    const content = useMemo(() => {
        if (!translatable) return null;
        return (
            <Translatable
                translatable={translatable}
                translationGeneratable={translationGeneratable}
                opened={opened}
                onClose={onToggleModal}
                name={fieldName}
                type={type}
            />
        );
    }, [opened, onToggleModal, translatable, fieldName, type]);

    return useMemo(() => [onToggleModal, content], [onToggleModal, content]);
}

export default useTranslatable;
