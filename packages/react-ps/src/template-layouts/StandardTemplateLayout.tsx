import { group_definition } from '../types';
import { WithChildren } from '../withs';
import GroupInstances from '@genstackio/react-modules-engine/lib/organisms/GroupInstances';
import StandardPdf from '../molecules/StandardPdf';
import Main from '../molecules/Main';
import { useMemo } from 'react';

const defaultTemplateModules = {};
const defaultModuleProps = {};
const defaultGroups = [];

export function StandardTemplateLayout({
    children,
    groups = defaultGroups,
    moduleProps = defaultModuleProps,
    templateModules = defaultTemplateModules,
}: StandardTemplateLayoutProps) {
    const { headers, mains, footers, others } = useMemo(
        () =>
            groups.reduce(
                (acc, g) => {
                    switch (g.type) {
                        case 'main':
                            acc.mains.push(g);
                            break;
                        case 'header':
                            acc.headers.push(g);
                            break;
                        case 'footer':
                            acc.footers.push(g);
                            break;
                        default:
                            acc.others.push(g);
                            break;
                    }
                    return acc;
                },
                { headers: [], mains: [], footers: [], others: [] } as Record<string, group_definition[]>,
            ),
        [groups],
    );
    return (
        <StandardPdf>
            <GroupInstances items={headers} templateModules={templateModules} moduleProps={moduleProps} />
            <Main>
                <GroupInstances items={mains} templateModules={templateModules} moduleProps={moduleProps}>
                    {(g: group_definition) => <>{'main' === g.type ? children : ''}</>}
                </GroupInstances>
            </Main>
            <GroupInstances items={others} templateModules={templateModules} moduleProps={moduleProps} />
            <GroupInstances items={footers} templateModules={templateModules} moduleProps={moduleProps} />
        </StandardPdf>
    );
}

export interface StandardTemplateLayoutProps extends WithChildren {
    namedGroups?: Record<string, group_definition>;
    groups?: group_definition[];
    templateModules?: any;
    moduleProps?: any;
}

export default StandardTemplateLayout;
