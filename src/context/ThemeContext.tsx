import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'obsidian' | 'light' | 'midnight' | 'emerald';

export interface ThemeOption {
  id: ThemeType;
  name: string;
  badge: string;
  iconBg: string;
  accentColor: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'obsidian',
    name: 'Linear Obsidian',
    badge: 'Modern Dark',
    iconBg: '#090b11',
    accentColor: '#3b82f6',
    description: 'Matte dark carbon, titanium borders, modern 2026 SaaS standard'
  },
  {
    id: 'light',
    name: 'Executive Alabaster',
    badge: 'Silicon Valley Light',
    iconBg: '#f8fafc',
    accentColor: '#2563eb',
    description: 'Crisp high-contrast light mode, Stripe/Apple executive aesthetic'
  },
  {
    id: 'midnight',
    name: 'Midnight Titanium',
    badge: 'Deep Navy',
    iconBg: '#060a14',
    accentColor: '#38bdf8',
    description: 'Rich dark royal navy with ice-blue metallic highlights'
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    badge: 'Modern AI / Fintech',
    iconBg: '#0a0c0e',
    accentColor: '#10b981',
    description: 'Deep carbon with mint & emerald accents, OpenAI style'
  }
];

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('akai_theme') as ThemeType;
      if (saved && ['obsidian', 'light', 'midnight', 'emerald'].includes(saved)) {
        return saved;
      }
    }
    return 'obsidian';
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('akai_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const isLight = theme === 'light';

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
