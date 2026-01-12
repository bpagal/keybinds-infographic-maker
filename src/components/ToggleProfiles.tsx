import { ToggleGroup } from "radix-ui";
import styles from "./ToggleProfiles.module.css";
import { PROFILES, type Profile } from "../constants";
import { FaApple, FaWindows } from "react-icons/fa6";

type Props = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

export const ToggleProfiles = ({ profile, setProfile }: Props) => {
  return (
    <ToggleGroup.Root
      className={styles.group}
      type="single"
      value={profile}
      onValueChange={(value) => {
        if (value) setProfile(value as Profile);
      }}
    >
      {PROFILES.map((profile) => {
        const [operatingSystem, personName] = profile.split("_");

        return (
          <ToggleGroup.Item
            key={profile}
            className={styles.item}
            value={profile}
          >
            <h3>{personName}</h3>
            {operatingSystem.includes("MAC") && <FaApple />}
            {operatingSystem.includes("WINDOWS") && <FaWindows />}
          </ToggleGroup.Item>
        );
      })}
    </ToggleGroup.Root>
  );
};
