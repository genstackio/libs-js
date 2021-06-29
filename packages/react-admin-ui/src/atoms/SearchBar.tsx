import { useCallback, useState } from 'react';
import { InputBase } from '@material-ui/core';
import { Icon } from './';
import { useTranslation } from 'react-i18next';

export function SearchBar({ defaultFocus = false, onClear }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const handleChange = useCallback((e) => setQuery(e.target.value), [setQuery]);
    const handleClear = useCallback(() => {
        setQuery('');
        onClear && onClear();
    }, [setQuery]);
    const handleKeyUp = useCallback((e) => e.keyCode === 27 && handleClear(), [handleClear]);
    const { t } = useTranslation();
    return (
        <div className={'flex x-searchbar-root w-1/2 md:w-full sm:w-full'}>
            <div className={'x-searchbar-icon'}>
                <Icon icon={'search'} />
            </div>
            <InputBase
                placeholder={t('search_bar_placeholder')}
                className={'flex-1'}
                value={query}
                onChange={handleChange}
                inputProps={{ className: 'opacity-70' }}
                autoFocus={!!defaultFocus}
                onKeyUp={handleKeyUp}
            />
            {!!query && <Icon icon={'close'} onClick={handleClear} className={'x-searchbar-close'} />}
        </div>
    );
}

export interface SearchBarProps {
    defaultFocus?: boolean;
    onClear?: Function;
}

export default SearchBar;
