import { Fragment } from "react";
import styles from "./PillGroup.module.css";
import { FaPlus } from "react-icons/fa6";

export type SingleKey = string | React.JSX.Element;

type Props = {
  keys: SingleKey[];
};

export const PillGroup = ({ keys }: Props) => {
  return (
    <div className={styles.pillGroup}>
      {keys.map((key, index) => (
        <Fragment key={index}>
          {typeof key === "string" ? (
            <div className={styles.pill}>{key}</div>
          ) : (
            key
          )}
          {index < keys.length - 1 && <FaPlus />}
        </Fragment>
      ))}
    </div>
  );
};
