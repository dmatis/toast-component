import React from "react";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  React.useEffect(() => {
    function handleKeyEscape(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    document.addEventListener("keydown", handleKeyEscape);

    return () => document.removeEventListener("keydown", handleKeyEscape);
  }, []);

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
