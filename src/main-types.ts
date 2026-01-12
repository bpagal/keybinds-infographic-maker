export type SingleKey = string;

export type KeybindWithoutId = {
  keys: SingleKey[];
  action: string;
  icon?: React.JSX.Element;
};

export type Keybind = KeybindWithoutId & { id: string };

export type OperatingSystem = "macOS" | "Windows";
