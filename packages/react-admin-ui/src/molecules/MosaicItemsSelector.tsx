import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Column from '../atoms/Column';
import MosaicItems from './MosaicItems';
import { AsComponent } from '../as';
import { WithItems, WithTitle } from '../withs';

export function MosaicItemsSelector({
    className,
    items,
    onValidation,
    selected = {},
    title,
}: MosaicItemsSelectorProps) {
    const { t } = useTranslation();
    const [selectedItem, setSelected] = useState(selected);
    const handleValidation = useCallback(() => {
        onValidation && onValidation(selectedItem);
    }, [onValidation, selectedItem]);

    return (
        <Column center className={clsx('p-2 sm:p-5 md:p-10', className)}>
            <Text
                center
                color={'secondary'}
                text={title}
                variant={'text'}
                className={clsx('border-b border-solid border-disabled', 'p-3')}
            />
            <Div my={'xmd'}>
                <MosaicItems items={items} onSelectionChange={setSelected} selected={selected} />
            </Div>
            <Button onClick={handleValidation} label={t('theme_selector_btn_validate')} />
        </Column>
    );
}

export interface MosaicItemsSelectorProps extends AsComponent, WithTitle, WithItems {
    onValidation?: Function;
    selected: any;
}

// noinspection JSUnusedGlobalSymbols
export default MosaicItemsSelector;
