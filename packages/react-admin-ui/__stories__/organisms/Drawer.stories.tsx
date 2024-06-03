import { s, a } from '../utils';
import Drawer from '../../src/organisms/Drawer';
import { useState } from 'react';
import DrawerContainer from '../../src/organisms/DrawerContainer';

export default {
    title: 'Organisms/Drawer',
    component: Drawer,
    argTypes: a({}),
};

const Template = (args) => {
    const [opened, setOpened] = useState(false);
    const onToggle = () => {
        setOpened(!opened);
    };

    return (
        <>
            <div onClick={onToggle}>click</div>
            <Drawer onClose={onToggle} opened={opened}>
                <DrawerContainer>HELLO WORLD</DrawerContainer>
            </Drawer>
        </>
    );
};

export const basic = s(Template, {});
