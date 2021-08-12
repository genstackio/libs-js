import { useState } from 'react';
import { args, s, a } from '../utils';
import { Button, Modal } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Modal',
    component: Modal,
    argTypes: a({
        title: args.title,
        buttonsItems: args.buttonsItems,
        opened: args.opened,
        onClose: args.onClose,
    }),
};

const Template = (args) => {
    const [opened, setOpened] = useState(false);
    const handleOpen = () => {
        setOpened(true);
    };
    const handleClose = () => {
        setOpened(false);
    };
    const title = 'New message';
    const content = data.common.content;
    const buttonsItems = [
        {
            variant: 'contained',
            color: 'secondary',
            onClick: handleClose,
            label: 'Close',
        },
        {
            variant: 'contained',
            color: 'primary',
            onClick: () => alert('Clicked'),
            label: 'Send message',
        },
    ];

    return (
        <div>
            <Button onClick={handleOpen}>Open</Button>
            <Modal title={title} opened={opened} onClose={handleClose} buttonsItems={buttonsItems as any[]}>
                <div className={'text-sm m-4'}>{content}</div>
            </Modal>
        </div>
    );
};

export const basic = s(Template, {});
