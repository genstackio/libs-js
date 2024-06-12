import { parseTranslationCode } from '@genstackio/translation-code-parser';
import TranslationsDrawer from './TranslationsDrawer';
import { useFormContext } from 'react-hook-form';

export function Translatable({ translatable, opened, onClose, type, name, translationGeneratable }: TranslatableProps) {
    const { getValues } = useFormContext() || {};
    const [itemType, itemId, itemKey] = parseTranslationCode(translatable);
    const defaultValue = (getValues?.() || {})[name || ''] || undefined; // do not use useMemo() as getValues do not change

    return (
        <TranslationsDrawer
            opened={opened}
            onClose={onClose}
            defaultValue={defaultValue}
            itemType={itemType}
            itemId={itemId}
            itemKey={itemKey}
            type={type}
            autotranslatable={translationGeneratable}
        />
    );
}

export interface TranslatableProps {
    translatable: string;
    translationGeneratable: string | undefined;
    opened: boolean;
    onClose: Function;
    type?: string;
    name: string;
}

export default Translatable;
