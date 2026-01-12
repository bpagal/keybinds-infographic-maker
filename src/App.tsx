import { Infographic } from "./components/Infographic";
import styles from "./App.module.css";
import { windowsBry } from "./profiles/windowsBry";
import { ToggleProfiles } from "./components/ToggleProfiles";
import { useMemo, useState } from "react";
import type { Profile } from "./constants";
import type { KeybindWithoutId, OperatingSystem } from "./main-types";
import { macBry } from "./profiles/macBry";

function App() {
  const [profile, setProfile] = useState<Profile>("MAC_BRY");
  const operatingSystem: OperatingSystem = profile.includes("MAC")
    ? "macOS"
    : "Windows";

  const keybindsWithoutId = useMemo<KeybindWithoutId[]>(() => {
    switch (profile) {
      case "WINDOWS_BRY":
        return windowsBry;
      case "MAC_BRY":
        return macBry;
      default:
        return [];
    }
  }, [profile]);

  return (
    <div className={styles.app}>
      <ToggleProfiles profile={profile} setProfile={setProfile} />
      <Infographic
        operatingSystem={operatingSystem}
        keybindsWithoutId={keybindsWithoutId}
      />
    </div>
  );
}

export default App;
