import { useState } from 'react';
import { args, s, a } from '../utils';
import { Button, Modal } from '../../src';

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
    const content =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
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
            <Modal title={title} opened={opened} onClose={handleClose} buttonsItems={buttonsItems}>
                <div className={'text-sm m-4'}>{content}</div>
            </Modal>
        </div>
    );
};

export const basic = s(Template, {});
