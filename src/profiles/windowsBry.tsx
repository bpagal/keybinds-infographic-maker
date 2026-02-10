import {
  FaDiscord,
  FaFirefoxBrowser,
  FaFolder,
  FaSteam,
} from "react-icons/fa6";
import type { KeybindWithoutId } from "../main-types";

export const windowsBry: KeybindWithoutId[] = [
  { keys: ["Shift", "1"], action: "Set main screen only" },
  { keys: ["Shift", "2"], action: "Set second screen only" },
  { keys: ["Shift", "3"], action: "Set extend screens" },
  {
    keys: ["1"],
    action: "Open or switch to Firefox",
    icon: <FaFirefoxBrowser style={{ color: "#E66000" }} />,
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
  { keys: ["Q"], action: "Open or switch to a game" },
  {
    keys: ["Shift", "Q"],
    action: "Move cursor to other monitor's center screen",
  },
  { keys: ["Z"], action: "Go to previous tab (browsers)" },
  { keys: ["X"], action: "Go to next tab (browsers)" },
  {
    keys: ["Shift", "Z"],
    action: "Move the current tab backward in the tab order (browsers only)",
  },
  {
    keys: ["Shift", "X"],
    action: "Move the current tab forward in the tab order (browsers only)",
  },
];
