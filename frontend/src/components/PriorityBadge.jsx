const priorityConfig = {
  LOW:      { label: 'Low',      class: 'bg-gray-100 text-gray-600' },
  MEDIUM:   { label: 'Medium',   class: 'bg-blue-100 text-blue-700' },
  HIGH:     { label: 'High',     class: 'bg-orange-100 text-orange-700' },
  CRITICAL: { label: 'Critical', class: 'bg-red-100 text-red-700' },
};

export default function PriorityBadge({ priority }) {
  const config = priorityConfig[priority] || priorityConfig.LOW;
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.class}`}>
      {config.label}
    </span>
  );
}