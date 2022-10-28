import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface NavbarProviderValue {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  resetColor: () => void;
}

interface NavbarProviderProps {
  children: any;
}

export const NavbarContext = createContext<NavbarProviderValue>({
  color: "#000",
  setColor: () => {},
  resetColor: () => {},
});

export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [color, setColor] = useState<string>("#000");

  const resetColor = () => {
    setColor("#000");
  };

  return (
    <NavbarContext.Provider
      value={{
        color,
        setColor,
        resetColor,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
