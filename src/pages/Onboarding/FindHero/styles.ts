import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fffde4;
  font-weight: bold;
  margin-top: 50px;
  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: #999;
  margin-bottom: 30px;
  max-width: 200px;
  text-align: center;
`;

export const FindButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border-radius: 5px;
  background: #8f3335;
  justify-content: center;
  align-items: center;
`;

export const FindButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fffde4;
`;
