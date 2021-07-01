import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Icon } from './';
import { class_name, flag } from '../types';
import { InputBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export function SearchBar({ className, defaultFocus = false, onClear, onChange }: SearchBarProps) {
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
        <div
            className={clsx(
                'w-full flex justify-between items-center space-x-4 bg-white text-gray-400 box-border',
                className,
            )}
        >
            <Icon icon={'search'} />
            <InputBase
                placeholder={t('search_bar_placeholder')}
                className={'flex-1'}
                value={query}
                onChange={handleChange}
                autoFocus={!!defaultFocus}
                onKeyUp={handleKeyUp}
            />
            <Icon icon={'close'} onClick={handleClear} className={'flex cursor-pointer'} />
        </div>
    );
}

export interface SearchBarProps {
    className?: class_name;
    defaultFocus?: flag;
    onClear?: Function;
    onChange?: Function;
}

export default SearchBar;
