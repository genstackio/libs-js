import { useCallback, useState } from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import MosaicItems from './MosaicItems';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {WithTitle} from "../withs";

export function MosaicItemsSelector({ title, items, selected = {}, onValidation }: MosaicItemsSelectorProps) {
    const { t } = useTranslation();
    const [selectedItem, setSelected] = useState(selected);
    const handleValidation = useCallback(() => {
        onValidation && onValidation(selectedItem);
    }, [onValidation, selectedItem]);

    return (
        <div className={'flex flex-col items-center p-10 sm:p-5 xs:p-2'}>
             <Text
                    className={clsx('border-b border-solid border-disabled', 'p-3')}
                    center
                    text={title}
                    color={'secondary'}
                    variant={'text'}
                />
            <div className={'my-3'}>
                <MosaicItems items={items} selected={selected} onSelectionChange={setSelected} />
            </div>
            <Button onClick={handleValidation}>{t('theme_selector_btn_validate')}</Button>
        </div>
    );
}

export interface MosaicItemsSelectorProps extends WithTitle {
    items?: any[];
    onValidation?: Function;
    selected: any;
}

export default MosaicItemsSelector;
