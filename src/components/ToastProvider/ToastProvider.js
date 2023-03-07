import React from "react";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function addToast(e) {
    e.preventDefault();

    if (message) {
      setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
      setMessage("");
      setVariant(VARIANT_OPTIONS[0]);
    }
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        handleDismiss,
        addToast,
        toasts,
        setToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
