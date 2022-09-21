import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.TouchableOpacity`
  width: 64%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(15)}px;
  align-items: center;
  padding: ${RFValue(14)}px;

`;

export const TitleButton = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;