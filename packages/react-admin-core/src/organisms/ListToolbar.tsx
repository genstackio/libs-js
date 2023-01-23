import clsx from 'clsx';
import Button from '@genstackio/react-admin-ui/lib/atoms/Button';
import Tag from '@genstackio/react-admin-ui/lib/atoms/Tag';
import SwitchField from '@genstackio/react-admin-ui/lib/atoms/fields/SwitchField';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@genstackio/react-admin-ui';

export function ListToolbar({
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
}: ListToolbarProps) {
    const { t } = useTranslation();

    const filterNames = Object.keys(filters || {});
    const hasFilters = !!filterNames.length;

    return hasFilters || !!onNewClick || displayPage ? (
        <div className={'w-full flex flex-col'}>
            {hasFilters && (
                <div className={'flex'}>
                    {filterNames.map((f) => (
                        <div key={f} className={'flex-1 flex flex-col'}>
                            <MenuItem
                                active={f === filterName}
                                label={t([filters[f]?.label, f])}
                                target={`/bla/${f}`}
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

export interface ListToolbarProps {
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
}

// noinspection JSUnusedGlobalSymbols
export default ListToolbar;
