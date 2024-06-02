import { ComponentType, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ScreenHeader from '@genstackio/react-admin-ui/lib/organisms/ScreenHeader';
import { breadcrumb_item_adhoc } from '@genstackio/react-admin-ui/lib/types';
import useBreadcrumbsFactory from '@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';

const defaultActionProps = {};

export function CreateScreenTemplate({
    name,
    action: CreateAction,
    breadcrumbs,
    pluralName,
    actionProps = defaultActionProps,
    ...rest
}: CreateScreenTemplateProps) {
    const history = useHistory();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    breadcrumbs = useBreadcrumbs(`${name}_new`, breadcrumbsFactory, {}, breadcrumbs);
    breadcrumbs = useMemo(
        () => (breadcrumbs || []).map((b) => ('function' === typeof b ? (b as Function)({}) : b)),
        [breadcrumbs],
    ) as breadcrumb_item_adhoc[];
    const onSuccess = useCallback(
        (data) => {
            history.push(
                `/${pluralName || `${name}s`}/${
                    data.data[`create${name.slice(0, 1).toUpperCase()}${name.slice(1)}`].id
                }`,
            );
        },
        [history, name, pluralName],
    );
    return (
        <div>
            {!!breadcrumbs.length && (
                <ScreenHeader items={breadcrumbs as breadcrumb_item_adhoc[]} className={'mt-3 mb-5'} />
            )}
            <CreateAction
                onSuccess={onSuccess}
                className={'w-full'}
                name={name}
                pluralName={pluralName}
                {...actionProps}
                {...rest}
            />
        </div>
    );
}

export interface CreateScreenTemplateProps {
    name: string;
    pluralName?: string;
    breadcrumbs?: any;
    actionProps?: any;
    action: ComponentType<{ onSuccess: Function; className?: string; [key: string]: any }>;
    defaultValues?: Record<string, unknown>;
    forcedRequiredFields?: Record<string, boolean>;
    forcedDisabledFields?: Record<string, boolean>;
    forcedAutoFocusFields?: Record<string, boolean>;
}

export default CreateScreenTemplate;
