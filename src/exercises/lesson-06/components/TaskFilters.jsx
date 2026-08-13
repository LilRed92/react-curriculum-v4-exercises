const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

export default function TaskFilters({ activeFilter, onFilterChange }) {
  return (
    <div>
      {FILTERS.map((filterOption) => (
        <button
          key={filterOption.value}
          onClick={() => onFilterChange(filterOption.value)}
        >
          {filterOption.label}
        </button>
      ))}
      <p>Current filter: {activeFilter}</p>
    </div>
  );
}
