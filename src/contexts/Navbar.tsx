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

const defaultNavbarContext = {
  color: "#000000",
  setColor: () => {},
  resetColor: () => {},
  overlayColor: "#ffffff",
  setOverlayColor: () => {},
}

export const NavbarContext = createContext<NavbarProviderValue>(defaultNavbarContext);

export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [color, setColor] = useState<string>(defaultNavbarContext.color);
  const [overlayColor, setOverlayColor] = useState<string>(defaultNavbarContext.overlayColor);

  const resetColor = () => {
    setColor(defaultNavbarContext.color);
    setOverlayColor(defaultNavbarContext.overlayColor);
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
