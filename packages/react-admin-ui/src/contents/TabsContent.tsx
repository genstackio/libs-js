import TabbedBlock from '../organisms/blocks/TabbedBlock';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Contents from '../molecules/Contents';

export function TabsContent({ content = [], ...rest }: TabsContentProps) {
    const sections = useSectionsFromContent(content, rest);

    return <TabbedBlock items={sections} className={'w-full rounded-none'} corner={'none'} />;
}

function useSectionsFromContent(content: any, props: any) {
    const { t } = useTranslation();
    return useMemo(
        () =>
            content.map(([title, c]: [string, any[]]) => ({
                title: t(title),
                content: <Contents content={c} {...props} />,
            })),
        [content, props, t],
    );
}

export interface TabsContentProps {
    content?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default TabsContent;
