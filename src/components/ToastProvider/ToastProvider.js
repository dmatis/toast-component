import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(React.useCallback(() => setToasts([]), []));

  function createToast(message, variant) {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        handleDismiss,
        createToast,
        toasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
