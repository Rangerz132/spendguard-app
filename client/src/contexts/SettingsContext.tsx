import { createContext, useContext, useState } from "react";

type SettingsContext = {
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsContext = createContext<SettingsContext | null>(null);

export function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext(
  settingsContext: React.Context<SettingsContext | null>
) {
  const context = useContext(settingsContext);

  if (!context) {
    throw new Error(
      "useSettingsContext has to be within ProviderSettingsContext"
    );
  } else {
    return context;
  }
}
