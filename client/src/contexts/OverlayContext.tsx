import { createContext, useContext, useState } from "react";

type OverlayContext = {
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OverlayContext = createContext<OverlayContext | null>(null);

export function OverlayContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [overlay, setOverlay] = useState<boolean>(false);

  return (
    <OverlayContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlayContext(
  overlayContext: React.Context<OverlayContext | null>
) {
  const context = useContext(overlayContext);

  if (!context) {
    throw new Error(
      "useOverlayContext has to be within OverlayContextProvider..."
    );
  } else {
    return context;
  }
}
