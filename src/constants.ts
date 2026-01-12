export const PROFILES = [
  "MAC_BRY",
  "MAC_BEE",
  "WINDOWS_BRY",
  "WINDOWS_BEE",
] as const;
export type Profile = (typeof PROFILES)[number];
