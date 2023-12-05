import { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import { useTranslation } from 'react-i18next';
import useImporter from '@genstackio/react-contexts/lib/hooks/useImporter';
import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import useBreadcrumbsFactory from '@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory';
import Contents from '@genstackio/react-admin-ui/lib/molecules/Contents';

const defaultPollableStatus: string[] = [];
const defaultTabs: any[] = [];
const defaultProperties: any[] = [];

export function DisplayScreen({
    name,
    plural,
    display: {
        deletable,
        editable,
        props = {},
        toolbar = false,
        extraToolbar = false,
        body = false,
        properties = defaultProperties,
        pollInterval = undefined,
        pollableStatus = defaultPollableStatus,
        tabs = defaultTabs,
    } = {},
}: DisplayScreenProps) {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const importer = useImporter();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const breadcrumbs = useBreadcrumbs(name, breadcrumbsFactory, { id });

    const goEdit = useCallback(() => {
        history.push(`/${plural}/${id}/edit`);
    }, [id, history, plural]);

    const onAfterDelete = useCallback(() => {
        history.push(`/${plural}/`);
    }, [history, plural]);

    const needIsPollable = !!pollableStatus.length;
    const isPollable = useCallback((doc: any) => pollableStatus.includes(doc.status), [pollableStatus]);
    pollInterval = needIsPollable ? pollInterval || 2000 : undefined;

    const toolbarComponent = useComponent('toolbar', name, undefined, toolbar);
    const extraToolbarComponent = useComponent('extra_toolbar', name, undefined, extraToolbar);

    const tabsList = useMemo(
        () =>
            tabs
                ? (tabs || []).map((tt: { name: string }) => {
                      const Comp = (importer ? importer(`${name}/${tt.name}`, 'tab') : undefined) || (() => null);
                      return { title: t(`tab_${name}_${tt.name}_title`), component: Comp };
                  })
                : undefined,
        [tabs, name, t, importer],
    );

    const children = useCallback(
        () =>
            body
                ? (pprops: { doc: any }) => {
                      let localBody: any = body;
                      const options = { type: name, ...pprops, properties, id };
                      if ('boolean' === typeof localBody) {
                          localBody = { content: [{ type: 'body', options }] };
                      }
                      localBody = { content: [], ...localBody };
                      return <Contents content={localBody.content} options={options} />;
                  }
                : undefined,
        [name, body, properties, id],
    );

    const Component = useComponent('screen_template', 'display');

    return (
        <Component
            id={id}
            name={name}
            isPollable={isPollable}
            pollInterval={pollInterval}
            toolbarComponent={toolbarComponent}
            extraToolbarComponent={extraToolbarComponent}
            tabs={tabsList}
            breadcrumbs={breadcrumbs}
            properties={properties}
            onEditClick={goEdit}
            onAfterDelete={onAfterDelete}
            deletable={deletable}
            editable={editable}
            children={children ? children() : undefined}
            {...props}
        />
    );
}

export interface DisplayScreenProps {
    name: string;
    singular: string;
    plural: string;
    display?: {
        deletable?: boolean;
        editable?: boolean;
        props?: any;
        toolbar?: boolean;
        extraToolbar?: boolean;
        body?: boolean;
        tabs?: { name: string }[];
        pollInterval?: number;
        pollableStatus?: string[];
        properties?: any[];
    };
}

// noinspection JSUnusedGlobalSymbols
export default DisplayScreen;
