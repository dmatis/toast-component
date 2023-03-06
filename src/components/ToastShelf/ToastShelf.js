import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant }, idx) => (
        <li key={idx} className={styles.toastWrapper}>
          <Toast variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
