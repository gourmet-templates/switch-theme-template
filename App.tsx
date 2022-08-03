import React from 'react';
import { AppProvider } from './src/hooks';
import { Home } from './src/Home';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

