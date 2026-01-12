import { Fragment } from "react";
import styles from "./PillGroup.module.css";
import { FaPlus, FaWindows } from "react-icons/fa6";
import { IconDiv } from "./IconDiv";
import { MdKeyboardOptionKey } from "react-icons/md";
import type { OperatingSystem, SingleKey } from "../main-types";

type Props = {
  keys: SingleKey[];
  operatingSystem: OperatingSystem;
};

export const PillGroup = ({ keys, operatingSystem }: Props) => {
  return (
    <div className={styles.pillGroup}>
      {operatingSystem === "macOS" && (
        <IconDiv>
          <MdKeyboardOptionKey />
        </IconDiv>
      )}
      {operatingSystem === "Windows" && (
        <IconDiv color="#00A1F1">
          <FaWindows />
        </IconDiv>
      )}
      {keys.map((key, index) => (
        <Fragment key={index}>
          <div className={styles.pill}>{key}</div>
          {index < keys.length - 1 && <FaPlus />}
        </Fragment>
      ))}
    </div>
  );
};
