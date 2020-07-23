import React from 'react';
import {View} from 'react-native';
import {Caption, Card, IconButton, Title} from 'react-native-paper';
import styled from 'styled-components/native';

interface Props {
  name: string;
  value: string;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}
const Stat = ({name, value, onIncrease, onDecrease}: Props) => (
  <View>
    <Wrapper>
      <ContentWrapper>
        <IconButton icon="chevron-left" onPress={() => onDecrease(name)} />
        <TextWrapper>
          <ValueText>{value}</ValueText>
          <NameText>{name}</NameText>
        </TextWrapper>
        <IconButton icon="chevron-right" onPress={() => onIncrease(name)} />
      </ContentWrapper>
    </Wrapper>
  </View>
);

const Wrapper = styled(Card)`
  margin-right: 8px;
  margin-top: 8px;
`;

const ContentWrapper = styled.View`
  flex-direction: row;
`;

const ValueText = styled(Title)`
  text-align: center;
`;

const NameText = styled(Caption)`
  text-align: center;
`;

const TextWrapper = styled.View``;

export default Stat;
