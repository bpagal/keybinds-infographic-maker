import type { ReactNode } from "react";
import styles from "./IconDiv.module.css";

type Props = {
  children: ReactNode;
  color?: string;
};

export const IconDiv = ({ children, color }: Props) => {
  return (
    <div className={styles.iconDiv} style={{ color }}>
      {children}
    </div>
  );
};
