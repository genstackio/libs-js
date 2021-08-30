import { ComponentType, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import nextId from 'react-id-generator';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from './List';
import Div from '../atoms/Div';
import Spinner from '../atoms/Spinner';
import { AsComponent } from '../as';
import { WithHeight } from '../withs';

function DefaultLoadingComponent() {
    return <Spinner className={'m-2'} />;
}

function DefaultItemComponent() {
    return <></>;
}

function DefaultEndComponent() {
    const { t } = useTranslation();

    return <>{t('data_list_no_more_items')}</>;
}

function mapItems(items: any[] = [], component: ComponentType<any> | undefined = undefined) {
    return items.map((item) => {
        const Comp = item.component || component || DefaultItemComponent;
        return {
            text: <Comp {...item} />,
            ...item,
        };
    });
}

export function DataList({
    className,
    h = '3xl',
    items = [],
    component,
    loadingComponent,
    endComponent,
    fetchMore,
    refresh,
    ...props
}: DataListProps) {
    const [id] = useState(nextId);
    items = useMemo(() => mapItems(items, component), [items, component]);
    const LoadingComponent = loadingComponent || DefaultLoadingComponent;
    const EndComponent = endComponent || DefaultEndComponent;

    return (
        <Div flex h={h} id={id} className={clsx(className, 'overflow-auto')} {...props}>
            <InfiniteScroll
                pullDownToRefresh={!!refresh}
                refreshFunction={refresh as any}
                dataLength={items.length}
                next={fetchMore as any}
                hasMore={!!fetchMore}
                loader={<LoadingComponent />}
                endMessage={<EndComponent />}
                scrollableTarget={id}
            >
                <List items={items} />
            </InfiniteScroll>
        </Div>
    );
}

export interface DataListProps extends AsComponent, WithHeight {
    items?: any[];
    component?: ComponentType<any>;
    loadingComponent?: ComponentType<any>;
    endComponent?: ComponentType<any>;
    fetchMore?: Function;
    refresh?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default DataList;
