import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { useCallback } from 'react';
import Contents from '@genstackio/react-admin-ui/lib/molecules/Contents';

export function ListScreen({
    name,
    singular,
    plural,
    list: { search, deletable, body = false, filters, props = {} } = {},
}: ListScreenProps) {
    const children = useCallback(
        () =>
            body
                ? (pprops: { doc: any }) => {
                      let localBody: any = body;
                      const options = { type: name, ...pprops };
                      if ('boolean' === typeof localBody) {
                          localBody = { content: [{ type: 'body', options }] };
                      }
                      localBody = { content: [], ...localBody };
                      return <Contents content={localBody.content} options={options} />;
                  }
                : undefined,
        [name, body],
    );

    const Component = useComponent('screen_template', 'list');

    return (
        <Component
            name={plural}
            singularName={singular}
            search={search}
            deletable={deletable}
            filters={filters}
            children={children ? children() : undefined}
            {...props}
        />
    );
}

export interface ListScreenProps {
    name: string;
    singular: string;
    plural: string;
    list?: {
        search?: boolean;
        deletable?: boolean;
        props?: any;
        body?: boolean;
        filters?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default ListScreen;
