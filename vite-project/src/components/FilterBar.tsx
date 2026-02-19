import { useTodoStore, type FilterType } from '../store/useTodoStore';

const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
];

const FilterBar = () => {
    const currentFilter = useTodoStore((state) => state.filter);
    const setFilter = useTodoStore((state) => state.setFilter);

    return (
        <div className="filter-bar">
            {filters.map((f) => (
                <button
                    key={f.value}
                    className={`filter-btn ${currentFilter === f.value ? 'active' : ''}`}
                    onClick={() => setFilter(f.value)}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
