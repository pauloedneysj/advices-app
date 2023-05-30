import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { PixelRatio } from "react-native";
import styled from "styled-components/native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  resize: cover;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  justify-content: center;
  align-items: center;
  margin: 80% 0 5% 0;
  padding: 5% 2% 5% 2%;
  border: 1px solid #808080;
  opacity: 0.9;
`;

export const Text = styled.Text`
  font-family: "Poppins_400Regular";
  color: #000;
  font-size: ${getFontSize(20)}px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.75px;
  width: 320px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: #2ecc71;
  border-radius: 5px;
  padding: 5% 5% 5% 5%;
`;

export const TextButton = styled.Text`
  color: #00000099;
  font-family: "Poppins_400Regular";
  font-size: ${getFontSize(16)}px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

export const Container = ({ children }: any) => {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontLoaded) return null;

  return (
    <Background source={require("../../../assets/background.jpg")}>
      {children}
    </Background>
  );
};

export const Button = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextButton>{title}</TextButton>
    </TouchableOpacity>
  );
};
