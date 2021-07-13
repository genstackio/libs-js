import SearchBar from '../SearchBar';
import { class_name, flag } from '../../types';
import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function SearchToolbarItem({ className, onChange, onToggle, active = false, ...props }: SearchToolbarItemProps) {
    return (
        <>
            {!active ? (
                <ToolbarItem {...props} icon={'fa-search'} onToggle={onToggle} className={className} />
            ) : (
                <SearchBar defaultFocus onClear={onToggle} onChange={onChange} className={className} />
            )}
        </>
    );
}

export interface SearchToolbarItemProps extends BaseToolbarItemProps {
    className?: class_name;
    onChange?: Function;
    onToggle?: Function;
    active?: flag;
}

export default SearchToolbarItem;
