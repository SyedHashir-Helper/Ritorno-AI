import { useState } from 'react';

interface Toast {
  title: string;
  description: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

export const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (toastData: Toast) => {
    setToast(toastData);
    setTimeout(() => setToast(null), 5000);
  };

  return {
    toast,
    showToast
  };
};