import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function useTableTranslation() {
    const { i18n } = useTranslation();

    return useMemo(() => {
        const r: any = { ...i18n.getResourceBundle(i18n.language, 'table') };
        const x = r.footerTotalVisibleRows;
        r.footerTotalVisibleRows = (a, b) => x.replace('{{visibleCount}}', a).replace('{{totalCount}}', b);
        const y1 = r.footerRowSelected;
        const yN = r.footerRowSelectedPlural;
        delete r.footerRowSelectedPlural;
        r.footerRowSelected = (a) => (a > 1 ? yN.replace('{{count}}', a) : y1.replace('{{count}}', a));
        const z1 = r.columnHeaderFiltersTooltipActive;
        const zN = r.columnHeaderFiltersTooltipActivePlural;
        delete r.columnHeaderFiltersTooltipActivePlural;
        r.columnHeaderFiltersTooltipActive = (a) => (a > 1 ? zN.replace('{{count}}', a) : z1.replace('{{count}}', a));
        const t1 = r.toolbarFiltersTooltipActive;
        const tN = r.toolbarFiltersTooltipActivePlural;
        delete r.toolbarFiltersTooltipActivePlural;
        r.toolbarFiltersTooltipActive = (a) => (a > 1 ? tN.replace('{{count}}', a) : t1.replace('{{count}}', a));
        const r2 = { ...i18n.getResourceBundle(i18n.language, 'tablePagination') };
        const uN = r2.labelDisplayedRows || '';
        const uX = r2.labelDisplayedRowsUnknown || '';
        delete r2.labelDisplayedRowsUnknown;
        r2.labelDisplayedRows = ({ count, from, to }) =>
            count !== -1
                ? uN.replace('{{count}}', count).replace('{{from}}', from).replace('{{to}}', to)
                : uX.replace('{{from}}', from).replace('{{to}}', to);
        return {
            localeText: r,
            pagination: r2,
        };
    }, [i18n, i18n.language]);
}

export default useTableTranslation;
