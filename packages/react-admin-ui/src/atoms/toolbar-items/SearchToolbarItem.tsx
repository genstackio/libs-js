import clsx from 'clsx';
import Icon from '../Icon';
import SearchBar from '../SearchBar';
import { class_name, flag } from '../../types';

export function SearchToolbarItem({ className, onChange, onToggle, active = false }: SearchToolbarItemProps) {
    return (
        <>
            {!active ? (
                <Icon icon={'search'} onClick={onToggle} className={clsx('flex cursor-pointer', className)} />
            ) : (
                <SearchBar defaultFocus onClear={onToggle} onChange={onChange} className={className} />
            )}
        </>
    );
}

export interface SearchToolbarItemProps {
    className?: class_name;
    onChange?: Function;
    onToggle?: Function;
    active?: flag;
}

export default SearchToolbarItem;
