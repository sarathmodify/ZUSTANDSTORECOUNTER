import { useTodoStore } from '../store/useTodoStore';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    const searchQuery = useTodoStore((state) => state.searchQuery);
    const setSearchQuery = useTodoStore((state) => state.setSearchQuery);

    return (
        <div className="search-wrapper">
            <FiSearch className="search-icon" />
            <input
                id="search-input"
                className="search-input"
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
