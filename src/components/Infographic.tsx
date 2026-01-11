import { FaWindows } from "react-icons/fa6";
import styles from "./Infographic.module.css";
import { IconDiv } from "./IconDiv";

export const Infographic = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pillGroup}>
        <IconDiv color="#00a4ef">
          <FaWindows />
        </IconDiv>
      </div>
    </div>
  );
};
