import { ComponentType, useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ScreenHeader from '@genstackio/react-admin-ui/lib/organisms/ScreenHeader';
import { breadcrumb_item_adhoc } from '@genstackio/react-admin-ui/lib/types';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import useBreadcrumbsFactory from '@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory';

const defaultActionProps = {};

export function EditScreenTemplate({
    name,
    action: EditAction,
    breadcrumbs,
    pluralName,
    actionProps = defaultActionProps,
    ...rest
}: EditScreenTemplateProps) {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const onSuccess = useCallback(
        (data) => {
            history.push(
                `/${pluralName || `${name}s`}/${
                    data.data[`update${name.slice(0, 1).toUpperCase()}${name.slice(1)}`].id
                }`,
            );
        },
        [history, name, pluralName],
    );
    breadcrumbs = useBreadcrumbs(`${name}_edit`, breadcrumbsFactory, { id }, breadcrumbs);
    breadcrumbs = useMemo(
        () => (breadcrumbs || []).map((b) => ('function' === typeof b ? (b as Function)({ id }) : b)),
        [breadcrumbs, id],
    ) as breadcrumb_item_adhoc[];
    return (
        <div>
            {!!breadcrumbs.length && (
                <ScreenHeader items={breadcrumbs as breadcrumb_item_adhoc[]} className={'mt-3 mb-5'} />
            )}
            <EditAction id={id} onSuccess={onSuccess} name={name} pluralName={pluralName} {...actionProps} {...rest} />
        </div>
    );
}

export interface EditScreenTemplateProps {
    name: string;
    pluralName?: string;
    breadcrumbs?: any[];
    actionProps?: any;
    action: ComponentType<{ id: string; onSuccess: Function }>;
}

// noinspection JSUnusedGlobalSymbols
export default EditScreenTemplate;
