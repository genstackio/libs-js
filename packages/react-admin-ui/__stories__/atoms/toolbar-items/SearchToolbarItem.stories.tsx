import { s, a, args } from '../../utils';
import { SearchToolbarItem } from '../../../src';
import { useState } from 'react';

export default {
    title: 'Atoms/toolbar-items/SearchToolbarItem',
    component: SearchToolbarItem,
    argTypes: a({
        className: args._disabled,
        show: args.flag,
        handleClick: args._disabled,
    }),
};

const Template = (args) => {
    const [search, setSearch] = useState<boolean>(false);
    return <SearchToolbarItem active={search} onToggle={setSearch} {...args} />;
};

export const basic = s(Template, {});
