import clsx from 'clsx';
import { useCallback, useState } from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import MosaicItems from './MosaicItems';
import { useTranslation } from 'react-i18next';
import { WithItems, WithTitle } from '../withs';
import { AsComponent } from '../as';

export function MosaicItemsSelector({
    className,
    title,
    items,
    selected = {},
    onValidation,
}: MosaicItemsSelectorProps) {
    const { t } = useTranslation();
    const [selectedItem, setSelected] = useState(selected);
    const handleValidation = useCallback(() => {
        onValidation && onValidation(selectedItem);
    }, [onValidation, selectedItem]);

    return (
        <div className={clsx('flex flex-col items-center p-10 sm:p-5 xs:p-2', className)}>
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

export interface MosaicItemsSelectorProps extends AsComponent, WithTitle, WithItems {
    onValidation?: Function;
    selected: any;
}

// noinspection JSUnusedGlobalSymbols
export default MosaicItemsSelector;
