import {
  FaDiscord,
  FaFirefoxBrowser,
  FaFolder,
  FaSteam,
  FaWindows,
} from "react-icons/fa6";
import styles from "./Infographic.module.css";
import { IconDiv } from "./IconDiv";
import { PillGroup, type SingleKey } from "./PillGroup";

import { v4 as uuidv4 } from "uuid";

type Keybind = {
  id: string;
  keys: SingleKey[];
  action: string;
  icon?: React.JSX.Element;
};

const getId = () => uuidv4();

const keybinds: Keybind[] = [
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "1",
    ],
    action: "Set main screen only",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "2",
    ],
    action: "Set second screen only",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "3",
    ],
    action: "Set extend screens",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "1",
    ],
    action: "Open or switch to Firefox",
    icon: (
      <FaFirefoxBrowser
        style={{
          color: "#E66000",
        }}
      />
    ),
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "2",
    ],
    action: "Open or switch to Discord",
    icon: (
      <FaDiscord
        style={{
          color: "#7289da",
        }}
      />
    ),
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "3",
    ],
    action: "Open or switch to File Explorer",
    icon: (
      <FaFolder
        style={{
          color: "gold",
        }}
      />
    ),
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "4",
    ],
    action: "Open or switch to Steam",
    icon: <FaSteam />,
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Q",
    ],
    action: "Open or switch to a game",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "Q",
    ],
    action: "Move cursor to other monitor's center screen",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Z",
    ],
    action: "Go to previous tab (browsers)",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "X",
    ],
    action: "Go to next tab (browsers)",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "Z",
    ],
    action: "Move current tab to left (browsers)",
  },
  {
    id: getId(),
    keys: [
      <IconDiv color="#00A1F1">
        <FaWindows />
      </IconDiv>,
      "Shift",
      "X",
    ],
    action: "Move current tab to right (browsers)",
  },
];

export const Infographic = () => {
  return (
    <div className={styles.wrapper}>
      {keybinds.map((keybind) => (
        <div className={styles.list} key={keybind.id}>
          <PillGroup keys={keybind.keys} />
          <h3 className={styles.textWithIcon}>
            {keybind.action}
            {keybind?.icon}
          </h3>
        </div>
      ))}
    </div>
  );
};
