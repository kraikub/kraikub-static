import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface NavbarProviderValue {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  resetColor: () => void;

  overlayColor: string;
  setOverlayColor: Dispatch<SetStateAction<string>>;
}

interface NavbarProviderProps {
  children: any;
}

export const NavbarContext = createContext<NavbarProviderValue>({
  color: "#000",
  setColor: () => {},
  resetColor: () => {},
  overlayColor: "#fff",
  setOverlayColor: () => {},
});

export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [color, setColor] = useState<string>("#000");
  const [overlayColor, setOverlayColor] = useState<string>("#000");

  const resetColor = () => {
    setColor("#000");
    setOverlayColor("#fff");
  };

  return (
    <NavbarContext.Provider
      value={{
        color,
        setColor,
        resetColor,
        overlayColor,
        setOverlayColor,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
