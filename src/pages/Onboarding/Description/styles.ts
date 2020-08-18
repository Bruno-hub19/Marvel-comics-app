import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #282828;
  justify-content: center;
  align-items: center;
  /* padding: 0 20px; */
`;

export const DescriptionContainer = styled.View`
  height: 200px;
  position: absolute;
  bottom: 0px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: rgba(51, 34, 27, 0.7);
  padding: 0 30px;
`;

export const DescriptionText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: left;
  color: #fffde4;
  z-index: 5;
`;

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 5px;
  background: #8f3335;
  justify-content: center;
  align-items: center;
`;

export const NextButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fffde4;
`;
