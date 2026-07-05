import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';

export default function TaskCard({ task, onEdit, onDelete }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  const isOverdue = task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== 'DONE';

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4
                    hover:shadow-md transition-shadow duration-200 group">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <PriorityBadge priority={task.priority} />
          {/* Action buttons — visible on hover */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(task)}
              className="p-1.5 text-gray-400 hover:text-blue-600
                         hover:bg-blue-50 rounded transition-colors"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task)}
              className="p-1.5 text-gray-400 hover:text-red-600
                         hover:bg-red-50 rounded transition-colors"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <StatusBadge status={task.status} />
        {task.dueDate && (
          <span className={`text-xs ${isOverdue ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
            {isOverdue ? '⚠ Overdue · ' : 'Due · '}
            {formatDate(task.dueDate)}
          </span>
        )}
      </div>
    </div>
  );
}