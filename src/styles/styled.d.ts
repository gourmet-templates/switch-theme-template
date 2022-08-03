import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: 'dark' | 'light',

    colors: {
      background: {
        primary: string
      },
      text: {
        primary: string;
      },
    },
  };
}