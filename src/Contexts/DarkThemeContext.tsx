import { createContext, ReactNode, useState } from "react";
interface DarkThemeProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const DarkThemeContext = createContext<DarkThemeProps>(
  {} as DarkThemeProps
);
export const DarkThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
