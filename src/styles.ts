import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 32px;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Button = styled.TouchableOpacity``;
