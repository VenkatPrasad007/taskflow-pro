const statuses = ['ALL', 'TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE'];

const labelMap = {
  ALL: 'All',
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  IN_REVIEW: 'In Review',
  DONE: 'Done',
};

export default function FilterBar({ activeFilter, onFilterChange, taskCount }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <p className="text-sm text-gray-500">{taskCount} task{taskCount !== 1 ? 's' : ''}</p>
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
              ${activeFilter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {labelMap[status]}
          </button>
        ))}
      </div>
    </div>
  );
}