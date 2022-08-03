import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from '@expo/vector-icons/Feather';

import { useTheme } from './hooks/theme';

import { Wrapper, Button, Title } from './styles';

export const Home: React.FC = (): JSX.Element => {
  const { onToggleTheme, colors, theme } = useTheme();

  const selectedTheme = theme === 'light';

  return (
    <Wrapper>
      <StatusBar style={selectedTheme ? 'dark' : 'light'} />

      <Title>
        O Tema selecionado é: {'\n'}
        {selectedTheme ? 'Claro' : 'Escuro'}
      </Title>

      <Button onPress={onToggleTheme}>
        <Icon
          name={selectedTheme ? 'moon' : 'sun'}
          size={48}
          color={colors.text.primary}
        />
      </Button>
    </Wrapper>
  );
};
