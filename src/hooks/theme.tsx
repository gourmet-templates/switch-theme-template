import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ThemeProvider as StyledComponentsProvider,
  ThemeContext as StyledThemeContext,
} from 'styled-components';

import { light, dark } from '../styles/theme';

type ThemeContextData = {
  onToggleTheme(): void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemePersistProps = ColorSchemeName;

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function useTheme() {
  const context = useContext(ThemeContext);
  const { onToggleTheme } = useContext(ThemeContext);
  const { theme, colors } = useContext(StyledThemeContext);

  if (!context) {
    throw new Error('An unexpected error has occurred');
  }

  return {
    theme,
    colors,
    onToggleTheme,
  };
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const deviceTheme = Appearance.getColorScheme();

  const INITIAL_THEME = deviceTheme === 'light' ? light : dark;

  const [theme, setTheme] = useState(INITIAL_THEME);

  useEffect(() => {
    async function getPersistedTheme(): Promise<void> {
      const persistedTheme = await AsyncStorage.getItem('theme');

      if (persistedTheme) {
        setTheme(persistedTheme === 'light' ? light : dark);
      }
    }

    getPersistedTheme();
  }, []);

  const persistTheme = useCallback(
    async (themeToPersist: ThemePersistProps) => {
      setTheme(themeToPersist === 'light' ? light : dark);
      if (themeToPersist) {
        await AsyncStorage.setItem('theme', themeToPersist);
      }
    },
    []
  );

  useEffect(() => {
    persistTheme(deviceTheme);
  }, [deviceTheme, persistTheme]);

  const onToggleTheme = useCallback(() => {
    persistTheme(theme.theme === 'light' ? 'dark' : 'light');
  }, [theme.theme, persistTheme]);

  return (
    <StyledComponentsProvider theme={theme}>
      <ThemeContext.Provider value={{ onToggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledComponentsProvider>
  );
};

export { ThemeProvider, useTheme };
