import React, { ReactNode } from 'react';

import { ThemeProvider } from './theme';

type AppProviderProps = {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}