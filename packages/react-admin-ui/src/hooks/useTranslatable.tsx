import { useCallback, useMemo, useState } from 'react';
import TranslationsDrawer from '../organisms/TranslationsDrawer';

export function useTranslatable(translatable: string, type?: string) {
    const [opened, setOpened] = useState(false);
    const onToggleModal = useCallback(() => {
        setOpened(!opened);
    }, [setOpened, opened]);

    const content = useMemo(() => {
        if (!translatable) return null;
        const [itemType, itemId] = parseItemInfos(translatable);
        return (
            <TranslationsDrawer
                opened={opened}
                onClose={onToggleModal}
                itemType={itemType}
                itemId={itemId}
                type={type}
            />
        );
    }, [opened, onToggleModal]);

    return useMemo(() => [onToggleModal, content], [onToggleModal, content]);
}

function parseItemInfos(translatable: string) {
    let [a, b] = translatable.split('/');
    if (!b) {
        b = a;
        a = '*current*';
    }

    return [a, b];
}
export default useTranslatable;
