"use client"; // 📌: 不要な "use client"

import styles from "./style.module.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
export function IconButton({ onClick, children }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
