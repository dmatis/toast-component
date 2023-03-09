import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyEscape(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    document.addEventListener("keydown", handleKeyEscape);

    return () => document.removeEventListener("keydown", handleKeyEscape);
  }, [callback]);
}

export default useEscapeKey;
