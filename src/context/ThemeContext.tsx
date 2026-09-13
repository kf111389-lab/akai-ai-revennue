import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'forest';

export interface ThemeOption {
  id: ThemeType;
  name: string;
  badge: string;
  iconBg: string;
  accentColor: string;
  secondaryAccent: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'forest',
    name: 'Forest & Honey Gold',
    badge: 'Prestige Luxe (Official)',
    iconBg: '#FAF9F5',
    accentColor: '#1E4630',
    secondaryAccent: '#B88746',
    description: 'Deep forest green, warm honey gold & warm ivory alabaster'
  }
];

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<ThemeType>('forest');

  const setTheme = () => {
    // Permanently locked to forest
    if (typeof window !== 'undefined') {
      localStorage.setItem('akai_theme', 'forest');
      document.documentElement.setAttribute('data-theme', 'forest');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('akai_theme', 'forest');
      document.documentElement.setAttribute('data-theme', 'forest');
    }
  }, []);

  const isLight = true;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
