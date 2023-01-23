import { useMemo } from 'react';
import SelectField, { SelectFieldProps } from './SelectField';
import { useTranslation } from 'react-i18next';

const defaultTags: any[] = [];

export function TagsField({ tags = defaultTags, ...props }: TagsFieldProps) {
    const { t } = useTranslation();
    const realTags = useMemo(() => {
        const realTags: any[] = [...tags].map((x: any) => ({ ...x, label: t(x.label || x.value || '?') }));
        realTags.sort((a: any, b: any) =>
            (a.label || a.value) > (b.label || b.value) ? 1 : (a.label || a.value) < (b.label || b.value) ? -1 : 0,
        );

        return realTags;
    }, [tags]);

    return <SelectField kind={'tags'} multiple values={realTags} {...props} />;
}

export interface TagsFieldProps extends SelectFieldProps {
    tags?: any[];
}

export default TagsField;
