import { getId } from "../helpers";
import type { KeybindWithoutId, OperatingSystem } from "../main-types";
import styles from "./Infographic.module.css";
import { PillGroup } from "./PillGroup";

type Props = {
  keybindsWithoutId: KeybindWithoutId[];
  operatingSystem: OperatingSystem;
};

export const Infographic = ({ keybindsWithoutId, operatingSystem }: Props) => {
  return (
    <div className={styles.wrapper}>
      {keybindsWithoutId
        .map((keybind) => ({ ...keybind, id: getId() }))
        .map((keybind) => (
          <div className={styles.list} key={keybind.id}>
            <PillGroup keys={keybind.keys} operatingSystem={operatingSystem} />
            <h3 className={styles.textWithIcon}>
              {keybind.action}
              {keybind.icon ? keybind.icon : null}
            </h3>
          </div>
        ))}
    </div>
  );
};
