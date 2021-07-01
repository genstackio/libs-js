import { Icon, SearchBar } from './';
import { class_name } from '../types';
import { useToggle } from '../hooks/useToggle';

export function SearchToolbarItem({ className }: SearchToolbarItemProps) {
    const [active, toggle] = useToggle();
    return (
        <div className={className}>
            {!active ? (
                <Icon icon={'search'} onClick={toggle} className={'cursor-pointer'} />
            ) : (
                <SearchBar defaultFocus onClear={toggle} />
            )}
        </div>
    );
}

export interface SearchToolbarItemProps {
    className?: class_name;
}

export default SearchToolbarItem;
