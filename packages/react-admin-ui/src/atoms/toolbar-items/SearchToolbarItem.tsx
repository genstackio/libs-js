import SearchBar from '../SearchBar';
import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';
import { WithOnChange } from '../../withs';

export function SearchToolbarItem({ active = false, className, onChange, onToggle, ...props }: SearchToolbarItemProps) {
    return active ? (
        <SearchBar defaultFocus onChange={onChange} onClear={onToggle} className={className} />
    ) : (
        <ToolbarItem {...props} icon={'fa-search'} onToggle={onToggle} className={className} />
    );
}

export interface SearchToolbarItemProps extends BaseToolbarItemProps, WithOnChange {}

// noinspection JSUnusedGlobalSymbols
export default SearchToolbarItem;
