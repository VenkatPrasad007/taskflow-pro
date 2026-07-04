import { useState, useEffect } from 'react';
import { taskApi } from './api/taskApi';
import TaskCard from './components/TaskCard';
import FilterBar from './components/FilterBar';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskApi.getAll();
      setTasks(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError('Failed to load tasks. Is the backend running?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = activeFilter === 'ALL'
    ? tasks
    : tasks.filter((t) => t.status === activeFilter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent 
                          rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Loading tasks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchTasks}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition-colors text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">TaskFlow Pro</h1>
            <p className="text-xs text-gray-400 mt-0.5">Task Management System</p>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium 
                       rounded-lg hover:bg-blue-700 transition-colors"
          >
            + New Task
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          taskCount={filteredTasks.length}
        />

        {filteredTasks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No tasks found</p>
            <p className="text-gray-300 text-sm mt-1">
              {activeFilter !== 'ALL'
                ? 'Try a different filter'
                : 'Create your first task to get started'}
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}