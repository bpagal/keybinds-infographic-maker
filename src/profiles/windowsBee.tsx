import {
  FaBrave,
  FaDiscord,
  FaFolder,
  FaGamepad,
  FaSteam,
} from "react-icons/fa6";
import type { KeybindWithoutId } from "../main-types";

export const windowsBee: KeybindWithoutId[] = [
  {
    keys: ["1"],
    action: "Open or switch to Brave",
    icon: <FaBrave style={{ color: "#FB542B" }} />,
  },
  {
    keys: ["2"],
    action: "Open or switch to Discord",
    icon: <FaDiscord style={{ color: "#7289da" }} />,
  },
  {
    keys: ["3"],
    action: "Open or switch to File Explorer",
    icon: <FaFolder style={{ color: "gold" }} />,
  },
  { keys: ["4"], action: "Open or switch to Steam", icon: <FaSteam /> },
  {
    keys: ["Q"],
    action: "Open or switch to Game windows (wuwa, honkai star rail, sims)",
    icon: <FaGamepad />,
  },
  { keys: ["Z"], action: "Go to previous tab (browsers only)" },
  { keys: ["X"], action: "Go to next tab (browsers only)" },
  {
    keys: ["Shift", "Z"],
    action: "Move the current tab backward in the tab order (browsers only)",
  },
  {
    keys: ["Shift", "X"],
    action: "Move the current tab forward in the tab order (browsers only)",
  },
  {
    keys: ["Shift", "Tab"],
    action: "Move the active window to the next monitor",
  },
  { keys: ["Shift", "C"], action: "Close current window" },
  { keys: ["Shift", "1"], action: "Set to PC screen only" },
  { keys: ["Shift", "2"], action: "Set to Second screen only" },
  { keys: ["Shift", "3"], action: "Extend screens" },
  { keys: ["Shift", "Q"], action: "Move cursor to other monitor's center" },
];
