import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import Row from './Row';
import { flag } from '../types';
import InputBase from '@material-ui/core/InputBase';
import { useTranslation } from 'react-i18next';
import { AsComponent } from '../as';
import { WithOnChange, WithOnClear } from '../withs';

export function SearchBar({ className, defaultFocus = false, onChange, onClear }: SearchBarProps) {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const handleChange = useCallback(
        (e) => {
            setQuery(e.target.value);
            onChange && onChange(e.target.value);
        },
        [setQuery],
    );
    const handleClear = useCallback(() => {
        setQuery('');
        onClear && onClear();
    }, [setQuery]);
    const handleKeyUp = useCallback((e) => e.keyCode === 27 && handleClear(), [handleClear]);

    return (
        <Row center full responsive={false} spaced={4} className={clsx('text-disabled box-border', className)}>
            <Icon icon={'fa-search'} size={'lg'} />
            <InputBase
                autoFocus={!!defaultFocus}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                placeholder={t('search_bar_placeholder')}
                value={query}
                className={'flex-1'}
            />
            <Icon icon={'close'} onClick={handleClear} className={'flex cursor-pointer'} />
        </Row>
    );
}

export interface SearchBarProps extends AsComponent, WithOnChange, WithOnClear {
    defaultFocus?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default SearchBar;
