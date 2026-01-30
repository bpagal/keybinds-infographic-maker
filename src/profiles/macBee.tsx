import {
  FaBrave,
  FaFilePowerpoint,
  FaFirefox,
  FaTelegram,
  FaFileExcel,
  FaViber,
  FaChrome,
  FaNoteSticky,
} from "react-icons/fa6";
import type { KeybindWithoutId } from "../main-types";

export const macBee: KeybindWithoutId[] = [
  {
    keys: ["1"],
    action: "Open or switch to Brave Browser",
    icon: <FaBrave style={{ color: "#FB542B" }} />,
  },
  {
    keys: ["2"],
    action: "Open or switch to Firefox",
    icon: <FaFirefox style={{ color: "orange" }} />,
  },
  {
    keys: ["3"],
    action: "Open or switch to Telegram",
    icon: <FaTelegram style={{ color: "#0088CC" }} />,
  },
  {
    keys: ["Q"],
    action: "Open or switch to Excel",
    icon: <FaFileExcel style={{ color: "#1D6F42" }} />,
  },
  {
    keys: ["W"],
    action: "Open or switch to Powerpoint",
    icon: <FaFilePowerpoint style={{ color: "#FB542B" }} />,
  },
  {
    keys: ["E"],
    action: "Open or switch to Chrome",
    icon: <FaChrome style={{ color: "#DD5144" }} />,
  },
  {
    keys: ["S"],
    action: "Open or switch to Viber",
    icon: <FaViber style={{ color: "#7360f2" }} />,
  },
  {
    keys: ["D"],
    action: "Open or switch to Notes",
    icon: <FaNoteSticky style={{ color: "#FFD52E" }} />,
  },
  {
    keys: ["Shift", "Tab"],
    action: "Move window and mouse to other monitor",
  },
  {
    keys: ["A"],
    action: "Switch windows same application",
  },
  {
    keys: ["H"],
    action: "Tile window to left half",
  },
  {
    keys: ["L"],
    action: "Tile window to right half",
  },
  {
    keys: ["M"],
    action: "Maximize window",
  },
  {
    keys: ["Z"],
    action: "Go to previous tab (browsers only)",
  },
  {
    keys: ["X"],
    action: "Go to next tab (browsers only)",
  },
  {
    keys: ["Command", "A"],
    action: "Format tab separated words to new line",
  },
  {
    keys: ["Command", "S"],
    action: "Format pricing (DP, 6 MONS, etc)",
  },
];
