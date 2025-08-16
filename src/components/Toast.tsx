import { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface ToastProps {
  toast: {
    title: string;
    description: string;
    status: 'success' | 'error' | 'info' | 'warning';
  } | null;
  onClose: () => void;
}

const Toast = ({ toast, onClose }: ToastProps) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const statusIcons = {
    success: <CheckCircle2 className="w-5 h-5" style={{ color: '#AD2831' }} />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    info: <Info className="w-5 h-5" style={{ color: '#AD2831' }} />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-400" />
  };

  const statusColors = {
    success: 'bg-gray-900/90 border-gray-700',
    error: 'bg-red-900/30 border-red-800',
    info: 'bg-gray-900/90 border-gray-700',
    warning: 'bg-yellow-900/30 border-yellow-800'
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`flex items-start p-4 rounded-lg border ${statusColors[toast.status]} shadow-lg max-w-md`}>
        <div className="mr-3 mt-0.5">
          {statusIcons[toast.status]}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-white">{toast.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{toast.description}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;