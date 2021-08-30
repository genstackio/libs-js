import { args, s, a } from '../utils';
import { Icon, DataList, Div, Text } from '../../src';
import { useCallback, useState } from 'react';

export default {
    title: 'Molecules/DataList',
    component: DataList,
    argTypes: a({
        items: args.items,
    }),
};

const allUsers = [
    { username: 'xy43ttt1', points: 345 },
    { username: 'kiki423', points: 567 },
    { username: 'alphonse02', points: 1345 },
    { username: 'mermaidx', points: 32 },
    { username: 'xy43ttt12', points: 345 },
    { username: 'kiki4232', points: 567 },
    { username: 'alphonse022', points: 1345 },
    { username: 'mermaidx2', points: 32 },
    { username: 'xy43ttt13', points: 345 },
    { username: 'kiki4233', points: 567 },
    { username: 'alphonse023', points: 1345 },
    { username: 'mermaidx3', points: 32 },
    { username: 'xy43ttt14', points: 345 },
    { username: 'kiki4234', points: 567 },
    { username: 'alphonse024', points: 1345 },
    { username: 'mermaidx4', points: 32 },
    { username: 'xy43ttt15', points: 345 },
    { username: 'kiki4235', points: 567 },
    { username: 'alphonse025', points: 1345 },
    { username: 'mermaidx5', points: 32 },
    { username: 'xy43ttt1', points: 345 },
    { username: 'kiki423', points: 567 },
    { username: 'alphonse02', points: 1345 },
    { username: 'mermaidx', points: 32 },
    { username: 'xy43ttt12', points: 345 },
    { username: 'kiki4232', points: 567 },
    { username: 'alphonse022', points: 1345 },
    { username: 'mermaidx2', points: 32 },
    { username: 'xy43ttt13', points: 345 },
    { username: 'kiki4233', points: 567 },
    { username: 'alphonse023', points: 1345 },
    { username: 'mermaidx3', points: 32 },
    { username: 'xy43ttt14', points: 345 },
    { username: 'kiki4234', points: 567 },
    { username: 'alphonse024', points: 1345 },
    { username: 'mermaidx4', points: 32 },
    { username: 'xy43ttt15', points: 345 },
    { username: 'kiki4235', points: 567 },
    { username: 'alphonse025', points: 1345 },
    { username: 'mermaidx5', points: 32 },
    { username: 'xy43ttt1', points: 345 },
    { username: 'kiki423', points: 567 },
    { username: 'alphonse02', points: 1345 },
    { username: 'mermaidx', points: 32 },
    { username: 'xy43ttt12', points: 345 },
    { username: 'kiki4232', points: 567 },
    { username: 'alphonse022', points: 1345 },
    { username: 'mermaidx2', points: 32 },
    { username: 'xy43ttt13', points: 345 },
    { username: 'kiki4233', points: 567 },
    { username: 'alphonse023', points: 1345 },
    { username: 'mermaidx3', points: 32 },
    { username: 'xy43ttt14', points: 345 },
    { username: 'kiki4234', points: 567 },
    { username: 'alphonse024', points: 1345 },
    { username: 'mermaidx4', points: 32 },
    { username: 'xy43ttt15', points: 345 },
    { username: 'kiki4235', points: 567 },
    { username: 'alphonse025', points: 1345 },
    { username: 'mermaidx5', points: 32 },
    { username: 'xy43ttt1', points: 345 },
    { username: 'kiki423', points: 567 },
    { username: 'alphonse02', points: 1345 },
    { username: 'mermaidx', points: 32 },
    { username: 'xy43ttt12', points: 345 },
    { username: 'kiki4232', points: 567 },
    { username: 'alphonse022', points: 1345 },
    { username: 'mermaidx2', points: 32 },
    { username: 'xy43ttt13', points: 345 },
    { username: 'kiki4233', points: 567 },
    { username: 'alphonse023', points: 1345 },
    { username: 'mermaidx3', points: 32 },
    { username: 'xy43ttt14', points: 345 },
    { username: 'kiki4234', points: 567 },
    { username: 'alphonse024', points: 1345 },
    { username: 'mermaidx4', points: 32 },
    { username: 'xy43ttt15', points: 345 },
    { username: 'kiki4235', points: 567 },
    { username: 'alphonse025', points: 1345 },
    { username: 'mermaidx5', points: 32 },
    { username: 'xy43ttt1', points: 345 },
    { username: 'kiki423', points: 567 },
    { username: 'alphonse02', points: 1345 },
    { username: 'mermaidx', points: 32 },
    { username: 'xy43ttt12', points: 345 },
    { username: 'kiki4232', points: 567 },
    { username: 'alphonse022', points: 1345 },
    { username: 'mermaidx2', points: 32 },
    { username: 'xy43ttt13', points: 345 },
    { username: 'kiki4233', points: 567 },
    { username: 'alphonse023', points: 1345 },
    { username: 'mermaidx3', points: 32 },
    { username: 'xy43ttt14', points: 345 },
    { username: 'kiki4234', points: 567 },
    { username: 'alphonse024', points: 1345 },
    { username: 'mermaidx4', points: 32 },
    { username: 'xy43ttt15', points: 345 },
    { username: 'kiki4235', points: 567 },
    { username: 'alphonse025', points: 1345 },
    { username: 'mermaidx5', points: 32 },
];

function ItemComp({ username, points }: any) {
    return (
        <Div flex spaced={2}>
            <Icon icon={'fa-fas--user'} />
            <Text text={username} />
            <Text text={`(${points})`} />
        </Div>
    );
}

export const basic = s(
    // eslint: react/display-name 0
    (args) => {
        const [fetches, setFetches] = useState<number>(0);
        const fetchMore = useCallback(() => {
            setTimeout(() => {
                setFetches(fetches + 1);
            }, 1000);
        }, [setFetches, fetches]);
        const refresh = useCallback(() => {
            alert('refreshing...');
            setFetches(0);
        }, [setFetches]);
        const newSize = (fetches + 1) * 10;
        const users = allUsers.slice(0, newSize);

        return (
            <DataList
                {...args}
                items={users}
                refresh={refresh}
                fetchMore={newSize < allUsers.length ? fetchMore : undefined}
            />
        );
    },
    {
        component: ItemComp,
    },
);
