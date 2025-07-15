import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeConfig {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    border: string;
    input: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
  };
}

const ThemeContext = createContext<ThemeConfig | undefined>(undefined);

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const lightColors = {
  background: 'rgb(255, 255, 255)',
  foreground: 'rgb(15, 23, 42)',
  card: 'rgb(255, 255, 255)',
  cardForeground: 'rgb(15, 23, 42)',
  border: 'rgb(226, 232, 240)',
  input: 'rgb(226, 232, 240)',
  primary: 'rgb(99, 102, 241)',
  primaryForeground: 'rgb(248, 250, 252)',
  secondary: 'rgb(241, 245, 249)',
  secondaryForeground: 'rgb(15, 23, 42)',
  accent: 'rgb(241, 245, 249)',
  accentForeground: 'rgb(15, 23, 42)',
  muted: 'rgb(241, 245, 249)',
  mutedForeground: 'rgb(100, 116, 139)',
};

const darkColors = {
  background: 'rgb(2, 8, 23)',
  foreground: 'rgb(248, 250, 252)',
  card: 'rgb(15, 23, 42)',
  cardForeground: 'rgb(248, 250, 252)',
  border: 'rgb(30, 41, 59)',
  input: 'rgb(30, 41, 59)',
  primary: 'rgb(129, 140, 248)',
  primaryForeground: 'rgb(15, 23, 42)',
  secondary: 'rgb(30, 41, 59)',
  secondaryForeground: 'rgb(248, 250, 252)',
  accent: 'rgb(30, 41, 59)',
  accentForeground: 'rgb(248, 250, 252)',
  muted: 'rgb(30, 41, 59)',
  mutedForeground: 'rgb(148, 163, 184)',
};

export function ThemeProvider({ 
  children, 
  defaultTheme = 'auto' 
}: { 
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('star-ui-theme') as Theme;
    if (stored) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const isDark = theme === 'dark' || (theme === 'auto' && getSystemTheme() === 'dark');
    
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    
    const colors = isDark ? darkColors : lightColors;
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--star-${key}`, value);
    });
    
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('star-ui-theme', newTheme);
  };

  const toggleTheme = () => {
    const currentIsDark = theme === 'dark' || (theme === 'auto' && getSystemTheme() === 'dark');
    setTheme(currentIsDark ? 'light' : 'dark');
  };

  const isDark = theme === 'dark' || (theme === 'auto' && getSystemTheme() === 'dark');
  const colors = isDark ? darkColors : lightColors;

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
      setTheme,
      isDark,
      colors,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}