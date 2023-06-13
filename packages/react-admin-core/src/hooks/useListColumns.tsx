import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RowAction } from '../molecules/RowAction';

export function useListColumns({
    columns,
    searchMode,
    list,
    goDoc,
    goEdit,
    onDelete,
    goPublicPage,
    singularName,
}: {
    columns?: any;
    searchMode: boolean;
    list: any;
    goDoc?: Function;
    goEdit?: Function;
    goPublicPage?: Function;
    onDelete?: Function;
    singularName?: string;
}) {
    const { t } = useTranslation();

    const actions: Record<string, Function> = useMemo(
        () => ({
            ...(goDoc ? { display: goDoc } : {}),
            ...(goEdit ? { edit: goEdit } : {}),
            ...(onDelete ? { delete: onDelete } : {}),
            ...(goPublicPage ? { displayPublicPage: goPublicPage } : {}),
        }),
        [goDoc, goEdit, onDelete, goPublicPage],
    );

    return useMemo(() => {
        if (columns) return columns;
        list = list || {};
        const xx = (
            (searchMode
                ? ((list as any) || {})['opensearchColumns'] || (list || {})['columns']
                : (list || {})['columns']) || []
        ).map((c: any) => {
            const cc = { ...c };
            cc['label'] = 'string' === typeof cc['label'] ? t(cc['label'] || '') : cc['label'];
            return cc;
        });
        if (list['actions'] && list['actions'].length) {
            xx.push({
                id: 'actions',
                flex: 0,
                width: (list['actions'] || []).length * (50 + (8 - 1.5 * (list['actions'] || []).length)),
                label: t('column_actions_label'),
                render: (_: any, doc: any) => {
                    const xxxx = (
                        (searchMode ? (list as any)['opensearchActions'] || list['actions'] : list['actions']) || []
                    ).map((xxx0: any, i: number) => {
                        const mapper = 'string' === typeof xxx0 ? undefined : xxx0?.map;
                        doc = mapper ? mapper(doc) : doc;
                        const xxx = 'string' === typeof xxx0 ? xxx0 : xxx0?.type;

                        return <RowAction key={i} type={xxx} doc={doc} actions={actions} singularName={singularName} />;
                    });
                    return xxxx.length ? <div className={'flex space-x-1'}>{xxxx}</div> : xxxx;
                },
            });
        }
        return xx;
    }, [searchMode, list, t, actions, columns]);
}

export default useListColumns;
