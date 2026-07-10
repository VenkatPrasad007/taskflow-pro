import { useEffect } from 'react';

const toastStyles = {
  success: 'bg-green-500',
  error:   'bg-red-500',
  info:    'bg-blue-500',
};

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3
                     px-4 py-3 rounded-lg text-white shadow-lg text-sm
                     animate-fade-in ${toastStyles[type]}`}>
      <span>
        {type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
      </span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
      >
        ×
      </button>
    </div>
  );
}