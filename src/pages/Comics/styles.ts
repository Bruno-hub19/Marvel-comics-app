import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
  justify-content: center;
  align-items: center;
  padding: 60px 30px 0;
`;

export const Header = styled.View`
  width: 100%;
  padding: 30px 0 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #fffde4;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 10px 0 20px;
`;

export const ComicCard = styled.View`
  width: 100%;
  padding: 0 15px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #111111;
  margin-bottom: 10px;
`;

export const ComicContent = styled.View`
  flex: 1;
  height: 150px;
  justify-content: center;
  padding-left: 15px;
`;

export const ComicName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fffde4;
`;

export const IssueNumberText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #a78b70;
  margin: 10px 0;
`;

export const ComicPrice = styled.Text`
  font-size: 18px;
  background: #a78b70;
  padding: 10px 5px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: #fffde4;
`;
