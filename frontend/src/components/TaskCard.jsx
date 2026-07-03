import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';

export default function TaskCard({ task }) {
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
                    hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>
        <PriorityBadge priority={task.priority} />
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