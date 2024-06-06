import { useCallback, useMemo, useState } from 'react';
import TranslationsDrawer from '../organisms/TranslationsDrawer';
import { parseTranslationCode } from '@genstackio/translation-code-parser';

export function useTranslatable(translatable: string, type?: string) {
    const [opened, setOpened] = useState(false);
    const onToggleModal = useCallback(() => {
        setOpened(!opened);
    }, [setOpened, opened]);

    const content = useMemo(() => {
        if (!translatable) return null;
        const [itemType, itemId, itemKey] = parseTranslationCode(translatable);
        return (
            <TranslationsDrawer
                opened={opened}
                onClose={onToggleModal}
                itemType={itemType}
                itemId={itemId}
                itemKey={itemKey}
                type={type}
            />
        );
    }, [opened, onToggleModal, translatable]);

    return useMemo(() => [onToggleModal, content], [onToggleModal, content]);
}

export default useTranslatable;
