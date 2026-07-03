const statusConfig = {
  TODO:        { label: 'To Do',       class: 'bg-gray-100 text-gray-600' },
  IN_PROGRESS: { label: 'In Progress', class: 'bg-yellow-100 text-yellow-700' },
  IN_REVIEW:   { label: 'In Review',   class: 'bg-purple-100 text-purple-700' },
  DONE:        { label: 'Done',        class: 'bg-green-100 text-green-700' },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.TODO;
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.class}`}>
      {config.label}
    </span>
  );
}