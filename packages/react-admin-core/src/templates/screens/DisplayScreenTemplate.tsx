import Alert from '@genstackio/react-admin-ui/lib/atoms/Alert';
import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import ScreenHeader from '@genstackio/react-admin-ui/lib/organisms/ScreenHeader';
import Infos from '@genstackio/react-admin-ui/lib/molecules/Infos';
import { useQueryApi } from "@genstackio/react-contexts";
import {useTranslation} from "react-i18next";
import {useMutationApi} from "@genstackio/react-contexts/lib/hooks/useMutationApi";
import {useCallback, useEffect, useMemo} from "react";
import {breadcrumb_item, breadcrumb_item_adhoc} from "@genstackio/react-admin-ui/lib/types";
import TableBlock from "@genstackio/react-admin-ui/lib/organisms/blocks/TabbedBlock";

function DisplayScreenTemplate({ toolbarComponent, id, name, infoClassName, breadcrumbs = [], onEditClick, onAfterDelete, properties = [], tabs = [], pollInterval = undefined, isPollable = undefined, children }: DisplayScreenTemplateProps) {
    const { t } = useTranslation();
    const {data, error, refetch, stopPolling, startPolling} = useQueryApi(`GET_${name.toUpperCase()}`, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id,
        }
    }) as any;

    const reload = refetch;

    const key = `get${name[0].toUpperCase() + name.slice(1)}`;

    const doc = useMemo(() => ((data || {})[key] || {}), [data, key]);

    const pollable = useMemo(() => ((isPollable && doc) ? isPollable!(doc) : true), [isPollable, doc]);

    useEffect(() => {
        if(!!pollInterval && !!pollable && !!data) {
            startPolling(pollInterval);
            return (): void => stopPolling();
        } else if (!!pollInterval && !pollable && !!data) {
            stopPolling();
        }
        return undefined;
    }, [pollInterval, stopPolling, pollable, doc, data, startPolling]);

    const tabProps = useMemo(() => ({doc, reload}), [doc, reload]);

    const ToolbarComponent = toolbarComponent;

    const fetchedProperties: {label: any, value: any}[] = properties.map(key => {
        return {value: doc[key], label: key};
    });
    const [onDelete] = useMutationApi(`DELETE_${name.toUpperCase()}`, {variables: {
            id,
        }});

    breadcrumbs = useMemo(() => breadcrumbs.map(b => {
        ('function' === typeof b) && (b = (b as Function)(doc))
        return b;
    }), [breadcrumbs, doc]);
    const handleDeleteClick = useCallback(async () => {
        await onDelete();
        onAfterDelete && onAfterDelete();
    }, [onDelete, onAfterDelete]);
    breadcrumbs = useMemo(() => (breadcrumbs || []).map(b => ('function' === typeof b) ? (b as Function)(doc) : b), [breadcrumbs, doc]) as breadcrumb_item_adhoc[];
    return (
        <>
            {!!breadcrumbs.length && <ScreenHeader items={breadcrumbs as breadcrumb_item_adhoc[]} className={'mt-3 mb-5'} />}
            {!!error && <Alert color={'danger'} className={'mb-2'}>{error.message}</Alert>}
            {!doc && <Alert color={'warning'}>{t([`screen_${name}_display_doc_empty`, 'screen_generic_display_doc_empty'])}</Alert>}
            {(!!onEditClick || !!onAfterDelete || !!ToolbarComponent) && (
                <div className={'mb-4 space-x-2'}>
                    {!!onEditClick && <Button icon={'fa-fas--pen-to-square'} onClick={onEditClick}>{t('button_edit_label')}</Button>}
                    {!!onAfterDelete && <Button icon={'fa-fas--trash'} onClick={handleDeleteClick} variant={'contained'} color={'danger'} confirm confirmKind={'delete'} confirmDanger>{t('button_delete_label')}</Button>}
                    {!!ToolbarComponent && <ToolbarComponent doc={doc} reload={reload} />}
                </div>
            )}
            {(!tabs.length && !!doc && !children && !!fetchedProperties && !!fetchedProperties.length) && <Infos items={fetchedProperties} className={infoClassName || 'w-1/3 md:w-1/2 xs:w-full'} />}
            {!!tabs.length && <TableBlock items={tabs} tabProps={tabProps} />}
            {'function' === typeof children ? children({doc}) : (!!children ? children : false)}
        </>
    );
}

export interface DisplayScreenTemplateProps {
    id: string;
    name: string;
    breadcrumbs?: breadcrumb_item[];
    properties?: string[];
    onEditClick?: Function;
    onAfterDelete?: Function;
    tabs?: any[];
    children?: any;
    infoClassName?: string;
    toolbarComponent?: any;
    pollInterval?: number;
    isPollable?: Function;
}

export default DisplayScreenTemplate
