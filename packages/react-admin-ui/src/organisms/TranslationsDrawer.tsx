import Drawer from './Drawer';
import { flag } from '../types';
import DrawerContainer from './DrawerContainer';
import TranslationsDrawerContent from '../molecules/TranslationsDrawerContent';

export function TranslationsDrawer({
    itemType,
    itemId,
    itemKey,
    opened = false,
    onClose,
    type,
    defaultValue = undefined,
    autotranslatable,
}: TranslationsDrawerProps) {
    return (
        <Drawer opened={opened} onClose={onClose}>
            <DrawerContainer>
                <TranslationsDrawerContent
                    onClose={onClose}
                    itemType={itemType}
                    itemId={itemId}
                    itemKey={itemKey}
                    type={type}
                    defaultValue={defaultValue}
                    autotranslatable={autotranslatable}
                />
            </DrawerContainer>
        </Drawer>
    );
}

export interface TranslationsDrawerProps {
    opened?: flag;
    onClose?: Function;
    itemType: string;
    itemId?: string;
    itemKey: string;
    type?: string;
    defaultValue?: unknown;
    autotranslatable?: string;
}

export default TranslationsDrawer;
