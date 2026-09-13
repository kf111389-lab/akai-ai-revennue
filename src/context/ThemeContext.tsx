import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'forest' | 'obsidian' | 'light' | 'midnight' | 'emerald';

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
    badge: 'Prestige Luxe (Default)',
    iconBg: '#FAF9F5',
    accentColor: '#1E4630',
    secondaryAccent: '#B88746',
    description: 'Deep forest green, warm honey gold & warm ivory alabaster (From Reference)'
  },
  {
    id: 'obsidian',
    name: 'Linear Obsidian',
    badge: 'Modern Dark',
    iconBg: '#090b11',
    accentColor: '#3b82f6',
    secondaryAccent: '#60a5fa',
    description: 'Matte dark carbon, titanium borders, modern SaaS standard'
  },
  {
    id: 'light',
    name: 'Executive Alabaster',
    badge: 'Silicon Valley Light',
    iconBg: '#f8fafc',
    accentColor: '#2563eb',
    secondaryAccent: '#3b82f6',
    description: 'Crisp high-contrast light mode, Stripe/Apple executive aesthetic'
  },
  {
    id: 'midnight',
    name: 'Midnight Titanium',
    badge: 'Deep Navy',
    iconBg: '#060a14',
    accentColor: '#38bdf8',
    secondaryAccent: '#818cf8',
    description: 'Rich dark royal navy with ice-blue metallic highlights'
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    badge: 'Modern AI / Fintech',
    iconBg: '#0a0c0e',
    accentColor: '#10b981',
    secondaryAccent: '#34d399',
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
      const version = localStorage.getItem('akai_theme_ver');
      if (version !== 'forest_v1') {
        // Upgrade to new flagship theme requested by user
        localStorage.setItem('akai_theme_ver', 'forest_v1');
        localStorage.setItem('akai_theme', 'forest');
        return 'forest';
      }
      const saved = localStorage.getItem('akai_theme') as ThemeType;
      if (saved && ['forest', 'obsidian', 'light', 'midnight', 'emerald'].includes(saved)) {
        return saved;
      }
    }
    return 'forest';
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

  const isLight = theme === 'forest' || theme === 'light';

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
