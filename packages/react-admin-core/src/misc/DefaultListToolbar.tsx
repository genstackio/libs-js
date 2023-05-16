import clsx from 'clsx';
import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import Tag from '@genstackio/react-admin-ui/lib/atoms/Tag';
import SwitchField from '@genstackio/react-admin-ui/lib/atoms/fields/SwitchField';
import { useTranslation } from 'react-i18next';
import { MenuItem, useForm } from '@genstackio/react-admin-ui';
import { buildListRouteUri } from '../utils/buildListRouteUri';

export function DefaultListToolbar({
    name,
    filterName,
    filters,
    onNewClick,
    displayPage,
    searchSwitch,
    items,
    loading,
    page,
    nextCursor,
    goNew,
    list,
    switchDefaultValues,
    handleSwitchChange,
    listRoute,
    searchMode,
    total,
}: DefaultListToolbarProps) {
    const { t } = useTranslation();

    const filterNames = Object.keys(filters || {});
    const hasFilters = !!filterNames.length;

    const { field } = useForm({}, 'list_toolbar');

    return hasFilters || !!onNewClick || displayPage ? (
        <div className={'w-full flex flex-col'}>
            {hasFilters && (
                <div className={'flex mb-2 space-x-2'}>
                    {filterNames.map((f) => (
                        <div key={f} className={`flex-1 flex flex-col`}>
                            <MenuItem
                                m={'none'}
                                active={f === filterName}
                                label={`${t([filters[f]?.label || '', f || ''])}${
                                    f === filterName && !!total ? ` (${total})` : ''
                                }`}
                                color={f === filterName ? 'primary' : 'secondary'}
                                target={buildListRouteUri(listRoute, {
                                    name,
                                    filterName: f,
                                    pPage: String(1),
                                    pSize: String(page.size),
                                    pMode: searchMode ? 'search' : 'default',
                                    pCursors: '',
                                })}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className={''}>
                <div className={clsx('flex space-x-4 items-center', !searchSwitch ? 'mb-5' : 'mb-1')}>
                    {!!onNewClick && (
                        <Button
                            onClick={
                                onNewClick
                                    ? onNewClick
                                    : (list['globalActions'] || []).includes('add')
                                    ? goNew
                                    : undefined
                            }
                            icon={'fa-fas--plus'}
                            variant={'contained'}
                        >
                            {t('button_add_label')}
                        </Button>
                    )}
                    {(!!items.length || !loading) && (page.index > 0 || !!nextCursor) && (
                        <Tag variant={'contained'} className={'rounded'} text={`Page ${page.index + 1}`} />
                    )}
                    {!!searchSwitch && (
                        <div className={'flex flex-col justify-center -mt-2'}>
                            <SwitchField
                                {...field}
                                name={'searchMode'}
                                defaultValues={switchDefaultValues}
                                label={'opensearch'}
                                onChange={handleSwitchChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null;
}

export type DefaultListToolbarProps = BaseListToolbarProps;
export interface BaseListToolbarProps {
    onNewClick?: any;
    displayPage?: any;
    searchSwitch?: any;
    items?: any;
    loading?: any;
    page?: any;
    nextCursor?: any;
    goNew?: any;
    list?: any;
    switchDefaultValues?: any;
    handleSwitchChange?: any;
    filters?: any;
    filterName?: string;
    listRoute: string;
    name: string;
    searchMode: boolean;
    total?: number;
}

// noinspection JSUnusedGlobalSymbols
export default DefaultListToolbar;
