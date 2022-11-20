import { useRouter } from "next/router";
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

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
  const router = useRouter();
  const [color, setColor] = useState<string>(defaultNavbarContext.color);
  const [overlayColor, setOverlayColor] = useState<string>(defaultNavbarContext.overlayColor);

  const resetColor = () => {
    setColor(defaultNavbarContext.color);
    setOverlayColor(defaultNavbarContext.overlayColor);
  };

  useEffect(() => {
    resetColor()
  }, [router])

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
