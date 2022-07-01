import {useCallback, useMemo} from "react";
import {useHistory, useParams} from "react-router-dom";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import {useTranslation} from "react-i18next";
import useImporter from "@genstackio/react-contexts/lib/hooks/useImporter";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";
import useBreadcrumbsFactory from "@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory";

const defaultPollableStatus: string[] = [];
const defaultTabs: any[] = [];
const defaultProperties: any[] = [];

export function DisplayScreen({name, plural, display: {toolbar = false, body = false, properties = defaultProperties, pollInterval = undefined, pollableStatus = defaultPollableStatus, tabs = defaultTabs} = {}}: DisplayScreenProps) {
    const {t} = useTranslation();
    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    const importer = useImporter();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const breadcrumbs = useBreadcrumbs(name, breadcrumbsFactory, {id});

    const goEdit = useCallback(() => {
        history.push(`/${plural}/${id}/edit`)
    }, [id, history, plural]);

    const onAfterDelete = useCallback(() => {
            history.push(`/${plural}/`);
        },
        [history, plural],
    );

    const needIsPollable = !!pollableStatus.length;
    const isPollable = useCallback((doc: any) => pollableStatus.includes(doc.status), [pollableStatus]);
    pollInterval = needIsPollable ? (pollInterval || 2000) : undefined;

    const toolbarComponent = useComponent('toolbar', name, undefined, toolbar);

    const tabsList = useMemo(() => tabs ? (tabs || []).map((tt: {name: string}) => {
        const Comp = (importer ? importer( `${name}/${tt.name}`, 'tabs') : undefined) || (() => null);
        return {title: t(`tab_${name}_${tt.name}_title`), component: Comp};
    }) : undefined, [tabs, name, t, importer]);

    const children = useCallback(() => body ? (pprops: {doc: any}) => {
        const Comp = (importer ? importer(name, 'body') : undefined) || (() => null);
        return <Comp {...pprops} properties={properties} id={id}/>;
    } : undefined, [name, body, properties, id, importer]);

    const Component = useComponent('screen_template', 'display');

    return <Component id={id} name={name} isPollable={isPollable} pollInterval={pollInterval} toolbarComponent={toolbarComponent} tabs={tabsList} breadcrumbs={breadcrumbs} properties={properties} onEditClick={goEdit} onAfterDelete={onAfterDelete} children={children ? children() : undefined} />;
}

export interface DisplayScreenProps {
    name: string;
    singular: string;
    plural: string;
    display?: {
        toolbar?: boolean;
        body?: boolean;
        tabs?: {name: string}[];
        pollInterval?: number;
        pollableStatus?: string[];
        properties?: any[];
    };
}

export default DisplayScreen
